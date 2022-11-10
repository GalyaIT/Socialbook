import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";
import { useWindowSize } from "../../Hooks/useWindowSize";

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const size = useWindowSize();
  return (
    <Modal
    className="ShareModal"
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size={size.width > 960 ? "50%": size.width < 768 ? "100%" : "80%"}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <PostShare/>
    </Modal>
  );
}
export default ShareModal;
