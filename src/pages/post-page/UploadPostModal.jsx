import React from "react"
import { Modal } from "antd"

const UploadPostModal = ({ open, close }) => {
  return <Modal title="Uplaod" open={open} onCancel={close} centered></Modal>
}

export default UploadPostModal
