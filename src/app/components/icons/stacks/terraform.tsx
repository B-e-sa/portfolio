import { ComponentProps } from "react"

export default function TerraformIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 0v5.05l4.349 2.527V2.526L1 0zm9.175 5.344l-4.35-2.525v5.05l4.35 2.527V5.344zm.476 5.052V5.344L15 2.819v5.05l-4.349 2.527zM10.174 16l-4.349-2.526v-5.05l4.349 2.525V16z"
        fill={props.fill}
      />
    </svg>
  )
}