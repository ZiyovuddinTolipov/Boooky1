import React, { useState, useEffect } from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ActiveDays from "./ActiveDays";

export default function ProfilePage() {
    const [userData, setUserData] = useState(null);

    // useEffect(() => {
    async function fetchData() {
        try {
            // Replace 'userId' with the actual user ID you want to retrieve
            const currentURL = window.location.href;
            // Split the URL by '/' and get the last part
            const parts = currentURL.split("/");
            let userId = parts[parts.length - 1];

            // Construct the API URL with the user ID
            const apiUrl = `https://boookyuz.pythonanywhere.com/users/${userId}`;

            // Make an HTTP GET request to the API
            const response = await fetch(apiUrl);

            // Check if the response status is OK (status code 200)
            if (response.ok) {
                // Parse the response as JSON
                const data = await response.json();
                console.log(data);
                setUserData(data); // Set the retrieved data in state
            } else {
                console.error(`API request failed with status: ${response.status}`);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    fetchData();
    // }, []);

    console.log(userData);
    return (

        <div className="flex min-h-screen min-w-[360px] flex-col text-label-1 dark:text-dark-label-1 bg-layer-bg dark:bg-dark-layer-bg">
            <nav
                id="leetcode-navbar"
                className="fixed left-0 right-0 top-0 flex h-[50px] w-full items-center border-b-[1px] border-solid md:relative border-border-tertiary dark:border-border-tertiary z-nav-9 bg-layer-1 dark:bg-dark-layer-1 nav-bar-container"
            >
                <div className="display-none m-auto h-[50px] w-full items-center justify-center px-6 md:flex max-w-[1200px]">
                    <a href="/" className="mb-0.5 flex items-center mr-8">
                        <span className="display-none h-[22px] dark:flex">
                            <svg
                                width="95"
                                height="111"
                                viewBox="0 0 95 111"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-full w-auto max-w-none"
                            >
                                <path
                                    d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                                    fill="#FFA116"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                                    fill="#B3B3B3"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        <span className="dark:display-none flex h-[22px]">
                            <svg
                                width="95"
                                height="111"
                                viewBox="0 0 95 111"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-full w-auto max-w-none"
                            >
                                <path
                                    d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                                    fill="#FFA116"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                                    fill="#B3B3B3"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                    </a>
                    <ul className="relative m-0 flex h-full grow items-center gap-6 self-end p-0">
                        <li className="relative flex h-full items-center text-sm">
                            <a
                                className="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
                                href="/explore/"
                            >
                                Explore
                            </a>
                        </li>
                        <li className="relative flex h-full items-center text-sm">
                            <a
                                className="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
                                href="/problemset/all"
                            >
                                Problems
                            </a>
                        </li>
                        <li className="relative flex h-full items-center text-sm">
                            <a
                                className="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
                                href="/contest"
                            >
                                Contest
                            </a>
                        </li>
                        <li className="relative flex h-full items-center text-sm">
                            <a
                                className="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
                                href="/discuss/"
                            >
                                Discuss
                            </a>
                        </li>
                        <li className="relative flex h-full items-center text-sm">
                            <div className="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary">
                                <span className="flex items-center focus:outline-none">
                                    <button
                                        className="contents"
                                        id="headlessui-menu-button-:Rdilb6:"
                                        type="button"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        data-headlessui-state=""
                                    >
                                        Interview{/* */}{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="ml-1 h-[14px] w-[14px]"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </li>
                        <li className="relative flex h-full items-center text-sm">
                            <div className="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary">
                                <span className="flex items-center focus:outline-none !text-brand-orange border-brand-orange">
                                    <button
                                        className="contents"
                                        id="headlessui-menu-button-:Reilb6:"
                                        type="button"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        data-headlessui-state=""
                                    >
                                        Store{/* */}{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="ml-1 h-[14px] w-[14px]"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </li>
                        <li className="relative flex h-full items-center text-sm ">
                            <div className="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary">
                                <div className="lc-lg:flex hidden h-full navbar__custom-item" />
                            </div>
                        </li>
                    </ul>
                    <div className="relative flex h-full items-center">
                        <div className="relative flex items-center space-x-2">
                            <div className="md:relative" data-headlessui-state="">
                                <button
                                    className="flex items-center focus:outline-none"
                                    aria-label="notification"
                                    type="button"
                                    aria-expanded="false"
                                    data-headlessui-state=""
                                    id="headlessui-popover-button-:r0:"
                                >
                                    <div className="text-text-secondary dark:text-text-secondary hover:bg-fill-3 dark:hover:bg-dark-fill-3 rounded w-8 h-8 relative flex items-center justify-center group cursor-pointer focus:outline-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="hover:text-text-primary dark:hover:text-text-primary "
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.403 10.891C16.5768 12.8986 17.0682 14.5303 17.7963 15.8174C17.8182 15.8563 17.8403 15.8945 17.8623 15.9322H6.13771C6.15975 15.8945 6.18177 15.8563 6.20374 15.8174C7.12442 14.1898 7.66667 12.0111 7.66667 9.21794C7.66667 7.21279 9.16139 5.52994 11.1553 5.15365C11.2695 4.39084 11.556 3.68438 11.9739 3.07513C8.496 3.08878 5.66667 5.82552 5.66667 9.21794C5.66667 11.6748 5.20893 13.5139 4.46294 14.8327C4.0464 15.5691 3.66114 15.9613 3.45925 16.091C2.61971 16.6307 3.00196 17.9322 4.00001 17.9322H20C20.9981 17.9322 21.3803 16.6307 20.5408 16.091C20.3389 15.9613 19.9536 15.5691 19.5371 14.8327C18.9112 13.7263 18.4882 12.2536 18.3682 10.3571C17.7723 10.661 17.1073 10.8489 16.403 10.891ZM14.3096 18.9368C13.8363 18.6522 13.2219 18.805 12.9372 19.2783C12.7485 19.5919 12.3915 19.7902 12 19.7902C11.6085 19.7902 11.2515 19.5919 11.0628 19.2783C10.7781 18.805 10.1637 18.6522 9.69045 18.9368C9.2172 19.2215 9.06434 19.836 9.34903 20.3092C9.90245 21.2292 10.9125 21.7902 12 21.7902C13.0875 21.7902 14.0976 21.2292 14.651 20.3092C14.9357 19.836 14.7828 19.2215 14.3096 18.9368Z"
                                            />
                                            <circle cx="16.1" cy="5.89999" r="3" fill="#F63636" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div
                                className="popover-wrapper inline-block"
                                data-headlessui-state=""
                            >
                                <div>
                                    <div
                                        aria-expanded="false"
                                        data-headlessui-state=""
                                        id="headlessui-popover-button-:r2:"
                                    >
                                        <a
                                            className="group relative flex h-8 items-center justify-center rounded p-1 hover:bg-fill-3 dark:hover:bg-dark-fill-3"
                                            href="/problems/knight-dialer/?envType=daily-question&envId=2023-11-27"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 18 18"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                className="h-[20px] w-[20px] hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="mx-1 text-sm font-medium hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary">
                                                0
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "fixed",
                                    top: 1,
                                    left: 1,
                                    width: 1,
                                    height: 0,
                                    padding: 0,
                                    margin: "-1px",
                                    overflow: "hidden",
                                    clip: "rect(0px, 0px, 0px, 0px)",
                                    whiteSpace: "nowrap",
                                    borderWidth: 0,
                                    display: "none",
                                }}
                            />
                            <div className="relative">
                                <button
                                    className="flex items-center focus:outline-none"
                                    id="headlessui-menu-button-:r4:"
                                    type="button"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    data-headlessui-state=""
                                >
                                    <span
                                        id="navbar_user_avatar"
                                        className="relative ml-1 h-6 w-6"
                                    >
                                        <img
                                            src="https://assets.leetcode.com/users/avatars/avatar_1701102105.png"
                                            alt="avatar"
                                            className="h-full w-full rounded-full object-cover"
                                        />
                                    </span>
                                </button>
                            </div>
                            <div style={{ marginLeft: 16 }}>
                                <a href="/subscribe/?ref=lp_pl&source=ot">
                                    <span className="display-none h-8 w-[84px] cursor-pointer  rounded-[8px] bg-[#ffa1161f] text-center leading-8 transition-colors hover:bg-[#ffa11633] lg:inline-block font-typo">
                                        <span className="text-brand-orange">Premium</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:display-none flex h-[50px] w-full items-center justify-between pl-3 pr-[5px]">
                    <a href="/" className="mb-0.5 flex items-center">
                        <span className="display-none h-[22px] dark:flex">
                            <svg
                                width="95"
                                height="111"
                                viewBox="0 0 95 111"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-full w-auto max-w-none"
                            >
                                <path
                                    d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                                    fill="#FFA116"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                                    fill="#B3B3B3"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        <span className="dark:display-none flex h-[22px]">
                            <svg
                                width="95"
                                height="111"
                                viewBox="0 0 95 111"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-full w-auto max-w-none"
                            >
                                <path
                                    d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                                    fill="#FFA116"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                                    fill="#B3B3B3"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                    </a>
                    <div className="z-overlay-1 flex h-full items-center">
                        <button className="group relative">
                            <div className="relative flex h-[40px] w-[40px] transform items-center justify-center overflow-hidden rounded-full bg-slate-700 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200">
                                <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden py-[2px] transition-all duration-300">
                                    <div className="h-[2px] w-7 origin-left scale-y-75 transform rounded-[1px] transition-all duration-300 bg-gray-60 dark:bg-gray-60" />
                                    <div className="h-[2px] w-7 scale-y-75 transform rounded-[1px] transition-all delay-75 duration-300 bg-gray-60 dark:bg-gray-60" />
                                    <div className="h-[2px] w-7 origin-left scale-y-75 transform rounded-[1px] transition-all delay-150 duration-300 bg-gray-60 dark:bg-gray-60" />
                                    <div className="absolute top-2.5 flex transform items-center justify-between transition-all duration-300 w-0 -translate-x-10">
                                        <div className="absolute h-[2px] w-5 rotate-0 transform rounded-[1px] transition-all delay-100 duration-300 bg-gray-60 dark:bg-gray-60" />
                                        <div className="absolute h-[2px] w-5 -rotate-0 transform rounded-[1px] transition-all delay-100 duration-300 bg-gray-60 dark:bg-gray-60" />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
            <div className="z-nav flex w-full flex-col" />
            <div className="mx-auto w-full grow p-4 md:mt-0 md:max-w-[888px] md:p-6 lg:max-w-screen-xl mt-[50px]">
                <div
                    className="lc-lg:flex-row lc-lg:space-x-4 flex flex-col overflow-visible"
                    style={{}}
                >
                    <div>
                        <div
                            className="bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg lc-lg:w-[300px] flex w-full min-w-[300px] flex-col px-4 pt-[21px]"
                            style={{}}
                        >
                            <div className="text-label-2 dark:text-dark-label-2 flex flex-col space-y-4">
                                <div className="flex space-x-4">
                                    <div className="relative flex h-20 w-20 shrink-0">
                                        <img
                                            src="https://assets.leetcode.com/users/avatars/avatar_1701102105.png"
                                            alt="Avatar"
                                            className="h-20 w-20 rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center" translate="no">
                                            <div className="text-label-1 dark:text-dark-label-1 break-all text-base font-semibold">
                                                ziyovuddinweb
                                            </div>
                                        </div>
                                        <div className="flex items-center" translate="no">
                                            <div className="text-label-3 dark:text-dark-label-3 text-xs" />
                                        </div>
                                        <div className="flex flex-1 items-end space-x-[5px] text-base">
                                            <span className="text-label-2 dark:text-dark-label-2">
                                                Rank
                                            </span>
                                            <span className="ttext-label-1 dark:text-dark-label-1 font-medium">
                                                ~5,000,000
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="bg-green-0 dark:bg-dark-green-0 text-green-s dark:text-dark-green-s hover:text-green-s dark:hover:text-dark-green-s w-full rounded-lg py-[7px] text-center font-medium"
                                    href="/profile/"
                                    style={{}}
                                >
                                    Edit Profile
                                </a>
                            </div>
                            <div className="border-divider-3 dark:border-dark-divider-3 mb-4 mt-4 h-px w-full border-b mt-2.5" />
                            <div>
                                <div className="text-base font-medium leading-6">
                                    Community Stats
                                </div>
                                <div className="mt-4 flex flex-col space-y-4">
                                    <div className="flex flex-col space-y-1">
                                        <div className="flex items-center space-x-2 text-[14px]">
                                            <div className="text-[18px]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    className="text-blue-s dark:text-dark-blue-s"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="text-label-2 dark:text-dark-label-2">
                                                Views
                                            </div>
                                            <div>0</div>
                                        </div>
                                        <div className="ml-7 space-x-1 text-xs text-label-3 dark:text-dark-label-3">
                                            <span>Last week</span>
                                            <span>
                                                <span className="text-label-4 dark:text-dark-label-4">
                                                    0
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <div className="flex items-center space-x-2 text-[14px]">
                                            <div className="text-[18px]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    className="text-teal dark:text-dark-teal"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.442 3.433C2 4.152 2 5.136 2 7.1v9.8c0 1.964 0 2.946.442 3.668a3 3 0 00.99.99C4.155 22 5.136 22 7.1 22h9.8c1.964 0 2.946 0 3.668-.442.403-.247.743-.587.99-.99C22 19.845 22 18.863 22 16.9V7.1c0-1.964 0-2.946-.442-3.667a3 3 0 00-.99-.99C19.845 2 18.863 2 16.9 2H7.1c-1.964 0-2.946 0-3.667.442a3 3 0 00-.99.99zm6.534 7.823l1.805 1.805 4.243-4.243a1 1 0 011.414 1.414l-4.95 4.95a1 1 0 01-1.414 0L7.562 12.67a1 1 0 111.414-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="text-label-2 dark:text-dark-label-2">
                                                Solution
                                            </div>
                                            <div>0</div>
                                        </div>
                                        <div className="ml-7 space-x-1 text-xs text-label-3 dark:text-dark-label-3">
                                            <span>Last week</span>
                                            <span>
                                                <span className="text-label-4 dark:text-dark-label-4">
                                                    0
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <div className="flex items-center space-x-2 text-[14px]">
                                            <div className="text-[18px]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 18 18"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    className="text-olive dark:text-dark-olive"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M9 12.553A3.746 3.746 0 0112.531 9l.22-.001a3.75 3.75 0 013.412 5.304l.33 1.727a.395.395 0 01-.462.462l-1.727-.331A3.75 3.75 0 019 12.749v-.197z"
                                                        clipRule="evenodd"
                                                    />
                                                    <path d="M1.5 8.251a6.75 6.75 0 013.73-6.036A6.657 6.657 0 018.249 1.5h.401a.75.75 0 01.042.001c2.95.164 5.403 2.265 6.112 5.065.101.402 0 .895-.543.911-.543.016-1.51.023-1.51.023a5.25 5.25 0 00-5.25 5.25s-.048 1.248-.024 1.5c.024.25-.513.64-.914.537a6.653 6.653 0 01-1.33-.502.05.05 0 00-.032-.004l-2.601.498a.75.75 0 01-.878-.877l.498-2.603a.05.05 0 00-.004-.032A6.655 6.655 0 011.5 8.251z" />
                                                </svg>
                                            </div>
                                            <div className="text-label-2 dark:text-dark-label-2">
                                                Discuss
                                            </div>
                                            <div>0</div>
                                        </div>
                                        <div className="ml-7 space-x-1 text-xs text-label-3 dark:text-dark-label-3">
                                            <span>Last week</span>
                                            <span>
                                                <span className="text-label-4 dark:text-dark-label-4">
                                                    0
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <div className="flex items-center space-x-2 text-[14px]">
                                            <div className="text-[18px]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    className="text-brand-orange dark:text-dark-brand-orange"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="text-label-2 dark:text-dark-label-2">
                                                Reputation
                                            </div>
                                            <div>0</div>
                                        </div>
                                        <div className="ml-7 space-x-1 text-xs text-label-3 dark:text-dark-label-3">
                                            <span>Last week</span>
                                            <span>
                                                <span className="text-label-4 dark:text-dark-label-4">
                                                    0
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-divider-3 dark:border-dark-divider-3 mb-4 mt-4 h-px w-full border-b" />
                            <div className="text-base font-medium leading-6">Languages</div>
                            <div className="mt-3 flex items-center justify-center space-y-4 text-xs text-label-4 dark:text-dark-label-4">
                                Calculating...
                            </div>
                            <div className="border-divider-3 dark:border-dark-divider-3 mb-4 mt-4 h-px w-full border-b" />
                            <div>
                                <div className="text-base font-medium leading-6">Skills</div>
                                <div className="mt-4 flex flex-col space-y-4">
                                    <div>
                                        <div className="flex items-center text-xs">
                                            <span className="mr-1.5 flex">
                                                <span className="inline-block h-1 w-1 rounded-full bg-red-s dark:bg-dark-red-s" />
                                            </span>
                                            <span className="font-medium">Advanced</span>
                                        </div>
                                        <div className="mt-3 flex items-center justify-center text-xs text-label-4 dark:text-dark-label-4">
                                            Not enough data
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center text-xs">
                                            <span className="mr-1.5 flex">
                                                <span className="inline-block h-1 w-1 rounded-full bg-yellow dark:bg-dark-yellow" />
                                            </span>
                                            <span className="font-medium">Intermediate</span>
                                        </div>
                                        <div className="mt-3 flex items-center justify-center text-xs text-label-4 dark:text-dark-label-4">
                                            Not enough data
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="flex items-center text-xs">
                                            <span className="mr-1.5 flex">
                                                <span className="inline-block h-1 w-1 rounded-full bg-green-s dark:bg-dark-green-s" />
                                            </span>
                                            <span className="font-medium">Fundamental</span>
                                        </div>
                                        <div className="mt-3 flex items-center justify-center text-xs text-label-4 dark:text-dark-label-4">
                                            Not enough data
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lc-lg:max-w-[calc(100%_-_316px)] w-full">
                        <div
                            className="lc-xl:flex-row lc-xl:space-y-0 flex w-full flex-col space-x-0 space-y-4 lc-xl:space-x-4 lc-lg:mt-0 mt-4"
                            style={{}}
                        >
                            <div className="min-w-max max-w-full w-full flex-1">
                                <div
                                    className="bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg lc-xl:h-[186px] min-h-[186px] w-full pb-3 pt-4"
                                    style={{}}
                                >
                                    <div className="px-[13px] text-xs font-medium text-label-3 dark:text-dark-label-3">
                                        Solved Problems
                                    </div>
                                    <div className="lc-xl:mx-8 mx-3 flex items-center">
                                        <div className="mr-8 mt-6 flex min-w-[100px] justify-center">
                                            <div className="shrink-1 z-base relative max-h-[100px] max-w-[100px]">
                                                <svg
                                                    className="h-full w-full origin-center -rotate-90 transform"
                                                    viewBox="0 0 100 100"
                                                >
                                                    <circle
                                                        fill="none"
                                                        cx="50px"
                                                        cy="50px"
                                                        r="46"
                                                        strokeWidth={3}
                                                        strokeLinecap="round"
                                                        stroke="currentColor"
                                                        className="text-gray-4 dark:text-dark-gray-4 w-[100px]"
                                                    />
                                                    <circle
                                                        fill="none"
                                                        cx="50px"
                                                        cy="50px"
                                                        r="46"
                                                        strokeWidth={5}
                                                        strokeLinecap="round"
                                                        stroke="currentColor"
                                                        className="cursor-pointer text-brand-orange dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                                                        strokeDasharray="0 289.02652413026095"
                                                        strokeDashoffset={0}
                                                        data-difficulty="ALL"
                                                    />
                                                </svg>
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                                                    <div>
                                                        <div className="text-[24px] font-medium text-label-1 dark:text-dark-label-1">
                                                            0
                                                        </div>
                                                        <div className="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">
                                                            Solved
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lc-xl:max-w-[228px] flex w-full flex-col space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex w-full items-end text-xs">
                                                    <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                                                        Easy
                                                    </div>
                                                    <div className="flex flex-1 items-center">
                                                        <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                                            0
                                                        </span>
                                                        <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                                            /748
                                                        </span>
                                                    </div>
                                                    <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                                                        <span className="text-label-4 dark:text-dark-label-4">
                                                            Not enough data
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                                                    <div className="absolute h-full w-full bg-green-1 dark:bg-dark-green-1" />
                                                    <div
                                                        className="absolute h-full rounded-full transition-all duration-300 ease-out bg-olive dark:bg-dark-olive"
                                                        style={{ width: "0%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex w-full items-end text-xs">
                                                    <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                                                        Medium
                                                    </div>
                                                    <div className="flex flex-1 items-center">
                                                        <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                                            0
                                                        </span>
                                                        <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                                            /1553
                                                        </span>
                                                    </div>
                                                    <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                                                        <span className="text-label-4 dark:text-dark-label-4">
                                                            Not enough data
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                                                    <div className="absolute h-full w-full bg-yellow-1 dark:bg-dark-yellow-1" />
                                                    <div
                                                        className="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow dark:bg-dark-yellow"
                                                        style={{ width: "0%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex w-full items-end text-xs">
                                                    <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                                                        Hard
                                                    </div>
                                                    <div className="flex flex-1 items-center">
                                                        <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                                            0
                                                        </span>
                                                        <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                                            /648
                                                        </span>
                                                    </div>
                                                    <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                                                        <span className="text-label-4 dark:text-dark-label-4">
                                                            Not enough data
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                                                    <div className="absolute h-full w-full bg-red-1 dark:bg-dark-red-1" />
                                                    <div
                                                        className="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-s dark:bg-dark-red-s"
                                                        style={{ width: "0%" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg h-[186px] w-full flex-1">
                                <div className="p-4">
                                    <div>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="text-label-3 dark:text-dark-label-3 text-xs">
                                                    Badges
                                                </div>
                                                <div className="text-label-1 dark:text-dark-label-1 mt-1.5 text-2xl leading-[18px]">
                                                    0
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full justify-end">
                                            <img
                                                src="/static/images/badges/dcc-2023-11.png"
                                                alt="upcoming badge"
                                                className="mr-5 h-[72px] cursor-pointer opacity-5"
                                                data-state="closed"
                                            />
                                        </div>
                                        <div className="text-label-3 dark:text-dark-label-3 text-xs">
                                            Locked Badge
                                        </div>
                                        <div className="text-label-1 dark:text-dark-label-1 text-base">
                                            Nov LeetCoding Challenge
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg lc-md:pb-4 flex h-auto flex-col space-y-4 p-4 pb-0">
                                <div className="lc-md:flex-row lc-md:items-center lc-md:space-y-0 flex flex-col flex-wrap space-y-2">
                                    <div className="flex flex-1 items-center">
                                        <span className="lc-md:text-xl mr-[5px] text-base font-medium">
                                            0
                                        </span>
                                        <span className="lc-md:text-base whitespace-nowrap text-label-2 dark:text-dark-label-2">
                                            submissions in the last year
                                        </span>
                                        <div className="ml-1 mr-2 text-gray-5 dark:text-dark-gray-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                data-state="closed"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2zm0 14C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-xs">
                                        <div className="mr-4.5 space-x-1">
                                            <span className="text-label-3 dark:text-dark-label-3">
                                                Total active days:
                                            </span>
                                            <span className="font-medium text-label-2 dark:text-dark-label-2">
                                                0
                                            </span>
                                        </div>
                                        <div className="space-x-1">
                                            <span className="text-label-3 dark:text-dark-label-3">
                                                Max streak:
                                            </span>
                                            <span className="font-medium text-label-2 dark:text-dark-label-2">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <ActiveDays />
                            </div>
                            <div className="mt-4">
                                <div className="bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg px-4 pb-4 pt-4">
                                    <div className="space-y-[18px]">
                                        <div className="text-label-2 dark:text-dark-label-2 flex w-full items-center">
                                            <div className="cursor-pointer">
                                                <div className="lc-md:space-x-2 flex items-center rounded-[5px] px-5 py-[10px] font-medium hover:text-label-1 dark:hover:text-dark-label-1">
                                                    <span className="lc-md:inline hidden text-2xl">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="1em"
                                                            height="1em"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4zm5.718 9.304a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 14.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 15a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 16h2l.117-.007A1 1 0 0017 15zm-5.282-7.696a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 8.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 9a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 10h2l.117-.007A1 1 0 0017 9z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="whitespace-nowrap">Recent AC</span>
                                                </div>
                                            </div>
                                            <div className="cursor-pointer">
                                                <div className="lc-md:space-x-2 flex items-center rounded-[5px] px-5 py-[10px] font-medium hover:text-label-1 dark:hover:text-dark-label-1">
                                                    <span className="lc-md:inline hidden text-2xl">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="1em"
                                                            height="1em"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4z"
                                                                clipRule="evenodd"
                                                            />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10.763 12.827l-1.06-1.06a1 1 0 00-1.415 1.414l1.415 1.414a1.5 1.5 0 002.12 0l3.889-3.888a1 1 0 00-1.415-1.414l-3.534 3.534z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="whitespace-nowrap">Solutions</span>
                                                </div>
                                            </div>
                                            <div className="cursor-pointer">
                                                <div className="text-label-1 dark:text-dark-label-1 bg-fill-3 dark:bg-dark-fill-3 lc-md:space-x-2 flex items-center rounded-[5px] px-5 py-[10px] font-medium hover:text-label-1 dark:hover:text-dark-label-1">
                                                    <span className="lc-md:inline hidden text-2xl">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="1em"
                                                            height="1em"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="whitespace-nowrap">Discuss</span>
                                                </div>
                                            </div>
                                            <div
                                                className="ml-auto flex items-center overflow-auto whitespace-nowrap"
                                                style={{ overflowX: "hidden" }}
                                            >
                                                <div className="group ml-4 inline-block items-center space-x-4">
                                                    <div className="text-label-1 dark:text-dark-label-1 flex cursor-pointer items-center space-x-2">
                                                        <span className="group-hover:text-gray-8 dark:group-hover:text-dark-gray-8 text-base text-gray-8 dark:text-dark-gray-8">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width="1em"
                                                                height="1em"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-13.4v4.782l3.047 1.524a1 1 0 11-.894 1.788l-3.6-1.8A1 1 0 0111 12V6.6a1 1 0 112 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="w-px bg-gray-3 dark:bg-dark-gray-3 ml-4 inline-block h-3" />
                                                <div className="group ml-4 inline-block items-center space-x-4">
                                                    <div className="flex cursor-pointer items-center space-x-2">
                                                        <span className="group-hover:text-gray-8 dark:group-hover:text-dark-gray-8 text-base text-gray-6 dark:text-dark-gray-6">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 18 18"
                                                                width="1em"
                                                                height="1em"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-[70px] mt-[57px] flex-1">
                                                <div className="flex h-full flex-col items-center justify-center">
                                                    <img
                                                        src="/_next/static/images/null_light-53585615fd723ba992bd2df7a10d10d1.png"
                                                        className="w-[200px]"
                                                        alt="\u6570\u636E\u4E3A\u7A7A"
                                                    />
                                                    <span className="mt-3 text-sm font-medium text-label-4 dark:text-dark-label-4">
                                                        No discussions
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex w-full items-center justify-center">
                                                <div className="hidden flex h-[30px] w-[252px] cursor-pointer items-center justify-center rounded border transition-colors border-divider-border-2 dark:border-dark-divider-border-2 text-label-2 dark:text-dark-label-2 hover:bg-fill-4 dark:hover:bg-dark-fill-4">
                                                    Show More
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="z-overlay lc-md:right-[30px] lc-md:bottom-[31px] fixed bottom-4 right-4">
                            <div
                                className="shadow-level1 dark:shadow-dark-level1 bg-layer-1 dark:bg-dark-layer-1 cursor-pointer group h-12 w-12 rounded-lg flex mb-3 last:mb-0"
                                data-state="closed"
                            >
                                <div className="hover:bg-fill-4 dark:hover:bg-dark-fill-4 h-full w-full rounded-lg flex">
                                    <div className="w-6 m-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="w-full h-full text-label-2 dark:text-dark-label-2"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.564 5.862l3.52-3.226a1 1 0 011.676.737v2.24h3.466a3 3 0 013 3v9a1 1 0 001 1H19a1 1 0 001-1v-9a1 1 0 00-1-1h-1.129a1 1 0 110-2H19a3 3 0 013 3v9a3 3 0 01-3 3h-4.774a3 3 0 01-3-3v-9a1 1 0 00-1-1H6.76v2.213a1 1 0 01-1.676.737l-3.52-3.226a1 1 0 010-1.475zM5 18.613h2a1 1 0 110 2H5a3 3 0 01-3-3v-4a1 1 0 112 0v4a1 1 0 001 1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <a
                                aria-label="feedback"
                                href="https://leetcode.com/discuss/general-discussion/1771797/Share-your-feedback-to-the-new-user-profile-page"
                                target="_blank"
                                rel="noreferrer"
                                data-state="closed"
                            >
                                <div className="shadow-level1 dark:shadow-dark-level1 bg-layer-1 dark:bg-dark-layer-1 cursor-pointer group h-12 w-12 rounded-lg flex mb-3 last:mb-0">
                                    <div className="hover:bg-fill-4 dark:hover:bg-dark-fill-4 h-full w-full rounded-lg flex">
                                        <div className="w-6 m-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                className="w-full h-full text-blue-s dark:text-dark-blue-s"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M20.494 16.249a9.5 9.5 0 01-8.491 5.25 9.38 9.38 0 01-3.939-.855l-4.376.838a1 1 0 01-1.17-1.17l.838-4.376a9.377 9.377 0 01-.856-3.937 9.498 9.498 0 015.25-8.492A9.378 9.378 0 0112 2.5l.555.001c4.825.266 8.678 4.119 8.945 8.999v.497a9.381 9.381 0 01-1.006 4.252zM4.76 19.24l3.252-.622a1 1 0 01.64.09A7.382 7.382 0 0012 19.5a7.5 7.5 0 006.706-4.147A7.386 7.386 0 0019.5 12l.002-.445c-.21-3.807-3.25-6.847-7.002-7.055h-.502a7.385 7.385 0 00-3.35.794A7.5 7.5 0 004.5 12.002a7.38 7.38 0 00.793 3.347 1 1 0 01.09.639L4.76 19.24zM7.9 9.35c0 .718.58 1.3 1.294 1.3h.012c.715 0 1.294-.582 1.294-1.3 0-.718-.58-1.3-1.294-1.3h-.012c-.715 0-1.294.582-1.294 1.3zm6.893 1.3a1.297 1.297 0 01-1.293-1.3c0-.718.58-1.3 1.293-1.3h.014c.714 0 1.293.582 1.293 1.3 0 .718-.58 1.3-1.294 1.3h-.012zm.915 3.708a5.244 5.244 0 01-7.416 0 1 1 0 111.414-1.415 3.244 3.244 0 004.588 0 1 1 0 011.414 1.415z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <footer className="mx-4 mt-[50px] border-t border-gray-4 bg-paper p-5 dark:mx-0 dark:border-none dark:bg-dark-layer-bg md:mt-24 text-label-2 dark:text-dark-label-2">
                    <nav role="navigation" className="w-full">
                        <div className="m-auto max-w-6xl">
                            <div className="text-xs md:flex md:text-sm">
                                <div className="text-label-3 dark:text-dark-label-3 mr-5 mb-2 md:mb-0">
                                    Copyright © {/* */}2023{/* */} LeetCode
                                </div>
                                <div className="mb-2 flex flex-wrap items-center md:mb-0">
                                    <a
                                        className="hover:text-label-1 dark:hover:text-dark-label-1 leading-none inline whitespace-nowrap my-2 md:my-0 border-r border-dark-label-3 last:border-none pr-3 mr-3"
                                        href="/support/"
                                    >
                                        Help Center
                                    </a>
                                    <a
                                        className="hover:text-label-1 dark:hover:text-dark-label-1 leading-none inline whitespace-nowrap my-2 md:my-0 border-r border-dark-label-3 last:border-none pr-3 mr-3"
                                        href="/jobs/"
                                    >
                                        Jobs
                                    </a>
                                    <a
                                        className="hover:text-label-1 dark:hover:text-dark-label-1 leading-none inline whitespace-nowrap my-2 md:my-0 border-r border-dark-label-3 last:border-none pr-3 mr-3"
                                        href="/bugbounty/"
                                    >
                                        Bug Bounty
                                    </a>
                                    <a
                                        className="hover:text-label-1 dark:hover:text-dark-label-1 leading-none inline whitespace-nowrap my-2 md:my-0 border-r border-dark-label-3 last:border-none pr-3 mr-3"
                                        href="/interview/"
                                    >
                                        Assessment
                                    </a>
                                    <a
                                        className="hover:text-label-1 dark:hover:text-dark-label-1 leading-none inline whitespace-nowrap my-2 md:my-0 border-r border-dark-label-3 last:border-none pr-3 mr-3"
                                        href="/student/"
                                    >
                                        Students
                                    </a>
                                    <a
                                        className="hover:text-label-1 dark:hover:text-dark-label-1 leading-none inline whitespace-nowrap my-2 md:my-0 border-r border-dark-label-3 last:border-none pr-3 mr-3"
                                        href="/terms/"
                                    >
                                        Terms
                                    </a>
                                    <a
                                        className="hover:text-label-1 dark:hover:text-dark-label-1 leading-none inline whitespace-nowrap my-2 md:my-0 border-r border-dark-label-3 last:border-none pr-3 mr-3"
                                        href="/privacy/"
                                    >
                                        Privacy Policy
                                    </a>
                                </div>
                                <a
                                    className="hover:text-label-1 dark:hover:text-dark-label-1 flex grow items-center space-x-2 justify-self-end md:justify-end"
                                    href="/region/"
                                >
                                    <img
                                        src="/_next/static/images/us-4787d154ddfcd171038dd5c1c98f7f07.svg"
                                        height="18"
                                        width="18"
                                        alt="United States"
                                    />
                                    <span>United States</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
}
