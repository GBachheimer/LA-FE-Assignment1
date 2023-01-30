import React from 'react'

const MenuSpecial = ({color}) => {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.33366 0C1.20181 0 1.07291 0.0390994 0.963279 0.112354C0.853646 0.185608 0.768198 0.289727 0.717739 0.411545C0.667281 0.533362 0.654079 0.667406 0.679802 0.796727C0.705526 0.926048 0.76902 1.04484 0.862255 1.13807C0.95549 1.23131 1.07428 1.2948 1.2036 1.32052C1.33292 1.34625 1.46696 1.33304 1.58878 1.28259C1.7106 1.23213 1.81472 1.14668 1.88797 1.03705C1.96123 0.927414 2.00033 0.798521 2.00033 0.666667C2.00033 0.489856 1.93009 0.320287 1.80506 0.195262C1.68004 0.070238 1.51047 0 1.33366 0ZM4.00033 1.33333H13.3337C13.5105 1.33333 13.68 1.2631 13.8051 1.13807C13.9301 1.01305 14.0003 0.843478 14.0003 0.666667C14.0003 0.489856 13.9301 0.320287 13.8051 0.195262C13.68 0.070238 13.5105 0 13.3337 0H4.00033C3.82351 0 3.65395 0.070238 3.52892 0.195262C3.4039 0.320287 3.33366 0.489856 3.33366 0.666667C3.33366 0.843478 3.4039 1.01305 3.52892 1.13807C3.65395 1.2631 3.82351 1.33333 4.00033 1.33333ZM4.00033 3.33333C3.86847 3.33333 3.73958 3.37243 3.62995 3.44569C3.52031 3.51894 3.43486 3.62306 3.38441 3.74488C3.33395 3.86669 3.32075 4.00074 3.34647 4.13006C3.37219 4.25938 3.43569 4.37817 3.52892 4.4714C3.62216 4.56464 3.74095 4.62813 3.87027 4.65386C3.99959 4.67958 4.13363 4.66638 4.25545 4.61592C4.37727 4.56546 4.48138 4.48001 4.55464 4.37038C4.62789 4.26075 4.66699 4.13185 4.66699 4C4.66699 3.82319 4.59675 3.65362 4.47173 3.5286C4.34671 3.40357 4.17714 3.33333 4.00033 3.33333ZM6.66699 6.66667C6.53514 6.66667 6.40625 6.70577 6.29661 6.77902C6.18698 6.85227 6.10153 6.95639 6.05107 7.07821C6.00061 7.20003 5.98741 7.33407 6.01314 7.46339C6.03886 7.59272 6.10235 7.7115 6.19559 7.80474C6.28882 7.89797 6.40761 7.96147 6.53693 7.98719C6.66625 8.01291 6.8003 7.99971 6.92212 7.94925C7.04393 7.8988 7.14805 7.81335 7.22131 7.70371C7.29456 7.59408 7.33366 7.46519 7.33366 7.33333C7.33366 7.15652 7.26342 6.98695 7.1384 6.86193C7.01337 6.7369 6.8438 6.66667 6.66699 6.66667ZM13.3337 3.33333H6.66699C6.49018 3.33333 6.32061 3.40357 6.19559 3.5286C6.07056 3.65362 6.00033 3.82319 6.00033 4C6.00033 4.17681 6.07056 4.34638 6.19559 4.4714C6.32061 4.59643 6.49018 4.66667 6.66699 4.66667H13.3337C13.5105 4.66667 13.68 4.59643 13.8051 4.4714C13.9301 4.34638 14.0003 4.17681 14.0003 4C14.0003 3.82319 13.9301 3.65362 13.8051 3.5286C13.68 3.40357 13.5105 3.33333 13.3337 3.33333ZM13.3337 6.66667H9.33366C9.15685 6.66667 8.98728 6.7369 8.86226 6.86193C8.73723 6.98695 8.66699 7.15652 8.66699 7.33333C8.66699 7.51014 8.73723 7.67971 8.86226 7.80474C8.98728 7.92976 9.15685 8 9.33366 8H13.3337C13.5105 8 13.68 7.92976 13.8051 7.80474C13.9301 7.67971 14.0003 7.51014 14.0003 7.33333C14.0003 7.15652 13.9301 6.98695 13.8051 6.86193C13.68 6.7369 13.5105 6.66667 13.3337 6.66667Z" fill={color ? color : "#83828E"}/>
    </svg>
  )
}

export default MenuSpecial