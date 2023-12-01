import ChatBubble from "@/components/chat/ChatBubble";
import ChatWindow from "@/components/chat/ChatWindow";

export default function Home() {
  return (
    <main>
      <ChatWindow />
      <section id="info" className="mx-auto md:w-5/6 px-4">
        <h1 className="text-4xl">
          Langchain Custom Document Model
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum, fugit, eligendi quod voluptatem est explicabo ex excepturi quo suscipit ducimus libero. Maxime, aliquid molestiae ad facere sed ducimus deserunt dolores autem blanditiis nam rerum itaque repudiandae minima, veniam, at architecto voluptatem? Corrupti tenetur, necessitatibus asperiores suscipit eius vitae eaque!
        </p>
      </section>
    </main>
  );
}
