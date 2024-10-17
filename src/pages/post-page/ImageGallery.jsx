import React, { useState } from "react"
import InstaImage from "../../assets/Instagram.svg"

const ImageGallery = () => {
  const [images, setImages] = useState([
    { id: 1, url: InstaImage, likes: 0, comments: [], username: "user1" },
    { id: 2, url: InstaImage, likes: 0, comments: [], username: "user2" },
    { id: 3, url: InstaImage, likes: 0, comments: [], username: "user3" },
    { id: 3, url: InstaImage, likes: 0, comments: [], username: "user3" },
    { id: 3, url: InstaImage, likes: 0, comments: [], username: "user3" },
    { id: 3, url: InstaImage, likes: 0, comments: [], username: "user3" },
    { id: 3, url: InstaImage, likes: 0, comments: [], username: "user3" }
  ])

  const handleLike = (id) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, likes: image.likes + 1 } : image
      )
    )
  }

  const handleAddComment = (id, comment) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id
          ? { ...image, comments: [...image.comments, comment] }
          : image
      )
    )
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem"
      }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          style={{
            border: "1px solid #dbdbdb",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            width: "380px",
            backgroundColor: "#fafafa",
            marginBottom: "3rem"
          }}
        >
          {/* User Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem"
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              {image.username}
            </div>
          </div>

          {/* Image */}
          <img
            src={image.url}
            alt={`Image ${image.id}`}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "1rem"
            }}
          />

          {/* Like and Comment Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem"
            }}
          >
            <button
              onClick={() => handleLike(image.id)}
              style={{
                backgroundColor: "#3897f0",
                color: "white",
                padding: "8px 16px",
                borderRadius: "999px",
                fontSize: "14px",
                border: "none",
                cursor: "pointer"
              }}
            >
              ❤️ Like ({image.likes})
            </button>
            <button
              onClick={() => handleAddComment(image.id, "Nice picture!")}
              style={{
                backgroundColor: "#8e8e8e",
                color: "white",
                padding: "8px 16px",
                borderRadius: "999px",
                fontSize: "14px",
                border: "none",
                cursor: "pointer"
              }}
            >
              💬 Comment
            </button>
          </div>

          {/* Comments Section */}
          <div style={{ marginTop: "1rem" }}>
            {image.comments.length > 0 && (
              <div
                style={{ borderTop: "1px solid #dbdbdb", paddingTop: "1rem" }}
              >
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "8px"
                  }}
                >
                  Comments:
                </h4>
                <ul>
                  {image.comments.map((comment, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: "12px",
                        color: "#555",
                        marginBottom: "4px"
                      }}
                    >
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
