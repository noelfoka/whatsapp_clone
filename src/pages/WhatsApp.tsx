import ChatDetails from "../components/ChatDetails";
import MenuChats from "../components/MenuChats";
import MenuIcons from "../components/MenuIcons";

const WhatsApp = () => {
  return ( 
    <div className="flex h-screen w-screen">
      {/* meni icons */}
      <div className="min-w-[70px] max-w-[90px] bg-[#222f35]">
        <MenuIcons />
      </div>

      {/* chats menu */}
      <div className="min-w-[300px] max-w-[450px] bg-[#111b21]">
        <MenuChats />
      </div>

      {/* chat details */}
      <div className="flex-grow bg-[#222f35]">
        <ChatDetails />
      </div>
    </div>
   );
}
 
export default WhatsApp;