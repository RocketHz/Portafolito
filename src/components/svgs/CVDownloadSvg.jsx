import * as React from "react"

function CVDownloadSvg(props) {
  return (
    <svg
      className="relative h-8 w-8"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      {...props}
    >
      {"{&quot; &quot;}"}
      <path d="M0 0h24v24H0z" stroke="none" />
      {"{&quot; &quot;}"}
      <path d="M14 3v4a1 1 0 001 1h4" />
      {"{&quot; &quot;}"}
      <path d="M5 12V5a2 2 0 012-2h7l5 5v4" />
      {"{&quot; &quot;}"}
      <path d="M3 12L21 12" />
      {"{&quot; &quot;}"}
      <path d="M6 16L6 18" />
      {"{&quot; &quot;}"}
      <path d="M10 16L10 22" />
      {"{&quot; &quot;}"}
      <path d="M14 16L14 18" />
      {"{&quot; &quot;}"}
      <path d="M18 16L18 20" />
    </svg>
  )
}

export default CVDownloadSvg
