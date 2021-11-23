import React from "react"

const Bookmark = ({ saved, onClick }) =>
  saved ? (
    <svg
      onClick={onClick}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V15L8 12.4731L13 15V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1Z"
        fill="#376AED"
      />
    </svg>
  ) : (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 3V20.0625L12.675 17.37L12 17.0325L11.325 17.37L6 20.0625V3H18ZM18 1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V20.882C4.5 21.6253 5.28231 22.1088 5.94721 21.7764L12 18.75L18.0528 21.7764C18.7177 22.1088 19.5 21.6253 19.5 20.882V3C19.5 2.60218 19.342 2.22064 19.0607 1.93934C18.7794 1.65804 18.3978 1.5 18 1.5Z"
        fill="#376AED"
      />
    </svg>
  )

export default Bookmark
