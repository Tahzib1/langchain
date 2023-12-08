import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { Message as VercelChatMessage } from "ai";
import { SqlDatabase } from "langchain/sql_db";
import { SqlDatabaseChain } from "langchain/chains/sql_db";
import { DataSource } from "typeorm";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

const template = `Given an input question, first create a syntactically correct {dialect} query to run, then look at the results of the query and return the answer.
Use the following format:

Question: "Question here"
SQLQuery: "SQL Query to run"
SQLResult: "Result of the SQLQuery"
Answer: "Final answer here"

Only use the following tables:

{table_info}

Question: {input}`;

const isProd = process.env.NODE_ENV === "production";

const datasource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false,
    ca: isProd ? process.env.PLANETSCALE_SSL_CERT_PATH : '',
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;

    const prompt = PromptTemplate.fromTemplate(template);
    
    const db = await SqlDatabase.fromDataSourceParams({
      appDataSource: datasource,
    });
    const model = new OpenAI({ temperature: 0, openAIApiKey: process.env.OPENAI_API_KEY });
    
    const chain = new SqlDatabaseChain({
      llm: model,
      database: db,
      sqlOutputKey: "sql",
      prompt,
      // verbose: true
    });

    const res = await chain.invoke({
      query: currentMessageContent,
    });

    return NextResponse.json(res, { status: 200});

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
