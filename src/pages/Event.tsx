import { Button, Modal, Row } from "antd";
import { FC, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <EventCalendar events={}/>
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal 
        title="Добавить событие"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm />
      </Modal>
    </>
  )
}

export default Event;
