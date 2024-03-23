import * as React from "react"
import { SVGProps } from "react"
const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      stroke="#003459"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.5 1 4 4-4 4"
    />
  </svg>
)
export default ChevronIcon
