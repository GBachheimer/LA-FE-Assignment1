import React from 'react'

const Comments = ({color}) => {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0.333252H2C1.46957 0.333252 0.960859 0.543966 0.585787 0.919038C0.210714 1.29411 0 1.80282 0 2.33325V9.66659C0 10.197 0.210714 10.7057 0.585787 11.0808C0.960859 11.4559 1.46957 11.6666 2 11.6666H3.72667L5.52667 13.4733C5.58896 13.535 5.66284 13.5839 5.74406 13.6171C5.82529 13.6503 5.91226 13.6671 6 13.6666C6.1589 13.6666 6.31257 13.6099 6.43333 13.5066L8.58 11.6666H10C10.5304 11.6666 11.0391 11.4559 11.4142 11.0808C11.7893 10.7057 12 10.197 12 9.66659V2.33325C12 1.80282 11.7893 1.29411 11.4142 0.919038C11.0391 0.543966 10.5304 0.333252 10 0.333252ZM10.6667 9.66659C10.6667 9.8434 10.5964 10.013 10.4714 10.138C10.3464 10.263 10.1768 10.3333 10 10.3333H8.33333C8.17444 10.3332 8.02076 10.39 7.9 10.4933L6.03333 12.0933L4.47333 10.5266C4.41104 10.4648 4.33716 10.4159 4.25594 10.3827C4.17471 10.3496 4.08774 10.3327 4 10.3333H2C1.82319 10.3333 1.65362 10.263 1.5286 10.138C1.40357 10.013 1.33333 9.8434 1.33333 9.66659V2.33325C1.33333 2.15644 1.40357 1.98687 1.5286 1.86185C1.65362 1.73682 1.82319 1.66659 2 1.66659H10C10.1768 1.66659 10.3464 1.73682 10.4714 1.86185C10.5964 1.98687 10.6667 2.15644 10.6667 2.33325V9.66659Z" fill={color ? color : "#83828E"}/>
    </svg>
  )
}

export default Comments