"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? `${textClass} bg-white text-[#454E5E] shadow-menuShadow`
      : textClass;
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const textClass = `uppercase text-sm text-[#8289A6] block px-2 hover:bg-white hover:text-[#454E5E] py-2 rounded hover:shadow-menuShadow`;
  const buttonClass = `flex items-center gap-x-3 px-3 py-2 text-[#2C3E50] font-medium text-sm border border-[#F1F4FA] rounded-[10px] hover:bg-[#FAF9F9] hover:border-[#FAF9F9]`;
  return (
    <nav className="flex justify-between items-center w-full shadow-xs sm:px-20 px-5 h-[56px] shadow-headerShadow">
      <div className="flex rounded bg-[#F7F9FD] items-center py-1 px-2">
        <Link href="/" className={`${textClass} ${getLinkClass("/")}`}>
          Worldwide
        </Link>
        <Link
          href="/continents"
          className={`${textClass} ${getLinkClass("/continents")}`}
        >
          Continents
        </Link>
        <Link
          href="/countries"
          className={`${textClass} ${getLinkClass("/countries")}`}
        >
          Countries
        </Link>
        <Link href="/usa" className={`${textClass} ${getLinkClass("/usa")}`}>
          USA
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <button className={buttonClass} type="button" onClick={handleRefresh}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.06464 7C1.06464 4.01579 3.41749 1.05263 7.07985 1.05263C10.0374 1.05263 11.5002 3.21684 12.123 4.36842H10.2738C10.1326 4.36842 9.99719 4.42387 9.89736 4.52258C9.79753 4.62128 9.74145 4.75515 9.74145 4.89474C9.74145 5.03432 9.79753 5.1682 9.89736 5.2669C9.99719 5.3656 10.1326 5.42105 10.2738 5.42105H13.4677C13.6089 5.42105 13.7443 5.3656 13.8441 5.2669C13.9439 5.1682 14 5.03432 14 4.89474V1.73684C14 1.59725 13.9439 1.46338 13.8441 1.36468C13.7443 1.26598 13.6089 1.21053 13.4677 1.21053C13.3265 1.21053 13.1911 1.26598 13.0913 1.36468C12.9914 1.46338 12.9354 1.59725 12.9354 1.73684V3.64526C12.1859 2.3379 10.4505 0 7.07985 0C2.75422 0 0 3.51053 0 7C0 10.4895 2.75422 14 7.07985 14C9.14951 14 10.8721 13.1895 12.0986 11.9558C12.7494 11.2995 13.2656 10.5249 13.6189 9.67474C13.6454 9.6108 13.659 9.54232 13.6588 9.47321C13.6586 9.40409 13.6446 9.33569 13.6177 9.27191C13.5907 9.20813 13.5514 9.15022 13.5018 9.10149C13.4522 9.05276 13.3934 9.01416 13.3287 8.98789C13.2641 8.96163 13.1948 8.94822 13.1249 8.94842C13.055 8.94862 12.9858 8.96243 12.9213 8.98907C12.8568 9.0157 12.7982 9.05464 12.749 9.10365C12.6997 9.15267 12.6606 9.2108 12.6341 9.27474C12.3332 9.9989 11.8936 10.6587 11.3395 11.2179C10.3057 12.26 8.85247 12.9474 7.07985 12.9474C3.41749 12.9474 1.06464 9.98421 1.06464 7V7Z"
              fill="#2C3E50"
            />
          </svg>
          Refresh
        </button>
        <button className={buttonClass} type="button">
          <svg
            width="22"
            height="12"
            viewBox="0 0 22 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.825 0C0.606196 0 0.396354 0.0829 0.241637 0.230463C0.0869193 0.378026 0 0.578165 0 0.786851C0 0.995537 0.0869193 1.19568 0.241637 1.34324C0.396354 1.4908 0.606196 1.5737 0.825 1.5737H21.175C21.3938 1.5737 21.6036 1.4908 21.7584 1.34324C21.9131 1.19568 22 0.995537 22 0.786851C22 0.578165 21.9131 0.378026 21.7584 0.230463C21.6036 0.0829 21.3938 0 21.175 0H0.825ZM4.4 6.03252C4.4 5.82384 4.48692 5.6237 4.64164 5.47614C4.79635 5.32857 5.0062 5.24567 5.225 5.24567H16.775C16.9938 5.24567 17.2036 5.32857 17.3584 5.47614C17.5131 5.6237 17.6 5.82384 17.6 6.03252C17.6 6.24121 17.5131 6.44135 17.3584 6.58891C17.2036 6.73647 16.9938 6.81937 16.775 6.81937H5.225C5.0062 6.81937 4.79635 6.73647 4.64164 6.58891C4.48692 6.44135 4.4 6.24121 4.4 6.03252ZM8.8 11.2131C8.8 11.0045 8.88692 10.8043 9.04164 10.6568C9.19636 10.5092 9.4062 10.4263 9.625 10.4263H12.375C12.5938 10.4263 12.8036 10.5092 12.9584 10.6568C13.1131 10.8043 13.2 11.0045 13.2 11.2131C13.2 11.4218 13.1131 11.622 12.9584 11.7695C12.8036 11.9171 12.5938 12 12.375 12H9.625C9.4062 12 9.19636 11.9171 9.04164 11.7695C8.88692 11.622 8.8 11.4218 8.8 11.2131Z"
              fill="#2C3E50"
            />
          </svg>
          Filter
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
