import React from "react"
import BottomNav from "./BottomNav"
import { useState } from "react"
import UploadPostModal from "./UploadPostModal"
import ImageGallery from "./ImageGallery"

const PostSection = () => {
  const [visible, setVisible] = useState(false) // Modal visibility

  return (
    <div>
      <ImageGallery />
      <BottomNav setVisible={setVisible} />
      {visible && (
        <UploadPostModal open={visible} close={() => setVisible(false)} />
      )}
    </div>
  )
}

export default PostSection
