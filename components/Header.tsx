"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { trackInitiateCheckout } from "@/lib/tracking";
import Link from "next/link";
import { APP_URL } from "@/lib/constants";

/** Hook to ensure we only render portal content after mount (avoids hydration mismatch) */
function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  navLinks?: NavLink[];
  loginHref?: string;
  getAccessHref?: string;
}

const defaultNavLinks = [
  { label: "Terminal", href: "/terminal" },
  { label: "Hotsheet", href: "/hotsheet" },
  { label: "Sportsbooks", href: "/sportsbooks" },
  { label: "Pricing", href: "/pricing" },
  { label: "Odds", href: "/odds" },
];

export default function Header({
  navLinks = defaultNavLinks,
  loginHref = "/signin",
  getAccessHref = "/pricing",
}: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isMounted = useIsMounted();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("logged_out") === "1") {
      localStorage.removeItem("wagerbird_authenticated");
      localStorage.removeItem("wagerbird_user_uuid");
      setIsAuthenticated(false);
      window.history.replaceState({}, "", pathname);
      return;
    }
    setIsAuthenticated(localStorage.getItem("wagerbird_authenticated") === "true");
  }, [pathname]);

  const handleGoToTerminal = async (e: React.MouseEvent) => {
    e.preventDefault();
    const uuid = localStorage.getItem("wagerbird_user_uuid");
    if (!uuid) {
      localStorage.removeItem("wagerbird_authenticated");
      setIsAuthenticated(false);
      window.location.href = "/signin";
      return;
    }
    try {
      const res = await fetch(`/api/auth/me?uuid=${uuid}`);
      const data = await res.json();
      if (data?.loginUrl) {
        window.location.href = data.loginUrl;
        return;
      }
    } catch {}
    window.location.href = "/signin";
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-100 w-full h-[64px] bg-nav-bg backdrop-blur-sm border-b border-yellow-border">
      <nav className="flex items-center justify-between h-full px-[20px] md:px-[48px] gap-[16px] md:gap-[32px]">
        {/* Logo */}
        <Link
          href="/"
          data-cursor-label="HOME"
          className="flex items-center shrink-0 cursor-target"
          aria-label="WAGERBIRD Home"
        >
          <svg
            width="177"
            height="28"
            viewBox="0 0 177 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[22px] md:h-[28px] w-auto block"
          >
            <g clipPath="url(#clip0_2501_1394)">
              <mask
                id="mask0_2501_1394"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="177"
                height="28"
              >
                <path d="M176.296 0H0V28H176.296V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_2501_1394)">
                <path
                  d="M7.13021 3.23453L0 10.3647L12.1239 7.73649L11.5866 16.3187L19.905 15.5176L17.2109 27.5756L24.341 20.4454C27.7358 17.0507 27.7358 11.5467 24.341 8.15192L19.4237 3.23453C16.029 -0.160209 10.525 -0.16021 7.13021 3.23453Z"
                  fill="#205FFF"
                />
                <path
                  d="M12.6622 15.1592L9.34304 27.5755L0.24588 18.4784L12.6622 15.1592Z"
                  fill="#205FFF"
                />
                <path
                  d="M26.431 1.39062L23.1117 13.807L14.0145 4.70986L26.431 1.39062Z"
                  fill="#205FFF"
                />
                <path
                  d="M162.446 20.2013H156.595V8.06299H162.493C164.154 8.06299 165.583 8.306 166.78 8.79199C167.979 9.27405 168.9 9.9675 169.545 10.8723C170.195 11.7771 170.52 12.8598 170.52 14.1203C170.52 15.3847 170.195 16.4713 169.545 17.3801C168.9 18.2889 167.973 18.9863 166.765 19.4723C165.561 19.9583 164.121 20.2013 162.446 20.2013ZM160.084 18.0024H162.3C163.331 18.0024 164.199 17.8681 164.903 17.5994C165.613 17.3267 166.144 16.9059 166.498 16.3369C166.858 15.764 167.039 15.0251 167.039 14.1203C167.039 13.2233 166.858 12.4904 166.498 11.9214C166.144 11.3524 165.615 10.9336 164.912 10.6649C164.208 10.3962 163.34 10.2619 162.308 10.2619H160.084V18.0024Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M141.99 20.2013V8.06299H148.502C149.748 8.06299 150.812 8.22696 151.694 8.55492C152.579 8.87893 153.254 9.33925 153.716 9.93589C154.184 10.5286 154.417 11.226 154.417 12.0281C154.417 12.8341 154.18 13.5276 153.708 14.1084C153.235 14.6853 152.55 15.1278 151.653 15.436C150.761 15.7442 149.681 15.8983 148.413 15.8983H144.054V13.8358H147.849C148.515 13.8358 149.069 13.7686 149.51 13.6343C149.949 13.5 150.277 13.2984 150.493 13.0298C150.713 12.7611 150.823 12.4272 150.823 12.0281C150.823 11.625 150.713 11.2853 150.493 11.0087C150.277 10.732 149.947 10.5226 149.501 10.3804C149.061 10.2342 148.505 10.1611 147.833 10.1611H145.48V20.2013H141.99ZM150.903 14.6774L155.005 20.2013H151.153L147.14 14.6774H150.903Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M139.221 8.06299V20.2013H135.732V8.06299H139.221Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M120.78 20.2013V8.06299H127.389C128.603 8.06299 129.615 8.19536 130.426 8.46009C131.238 8.72483 131.848 9.0923 132.255 9.56249C132.664 10.0287 132.868 10.5661 132.868 11.1746C132.868 11.6488 132.74 12.0657 132.481 12.4252C132.223 12.7808 131.869 13.0732 131.417 13.3024C130.972 13.5276 130.461 13.6876 129.887 13.7825V13.901C130.515 13.9207 131.103 14.0512 131.652 14.2922C132.205 14.5332 132.654 14.871 132.997 15.3057C133.341 15.7363 133.513 16.25 133.513 16.8467C133.513 17.4907 133.296 18.0656 132.86 18.5714C132.431 19.0732 131.794 19.4703 130.95 19.7626C130.107 20.0551 129.068 20.2013 127.831 20.2013H120.78ZM124.269 18.1032H127.114C128.087 18.1032 128.796 17.9668 129.242 17.6942C129.688 17.4176 129.911 17.0502 129.911 16.5918C129.911 16.2559 129.801 15.9596 129.58 15.7027C129.36 15.446 129.046 15.2444 128.637 15.0983C128.235 14.952 127.754 14.8789 127.195 14.8789H124.269V18.1032ZM124.269 13.1423H126.857C127.335 13.1423 127.759 13.0811 128.13 12.9586C128.505 12.8321 128.801 12.6544 129.016 12.4252C129.237 12.196 129.347 11.9214 129.347 11.6014C129.347 11.1628 129.134 10.8091 128.71 10.5405C128.291 10.2717 127.695 10.1374 126.921 10.1374H124.269V13.1423Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M106.176 20.2013V8.06299H112.688C113.934 8.06299 114.998 8.22696 115.88 8.55492C116.766 8.87893 117.44 9.33925 117.902 9.93589C118.369 10.5286 118.603 11.226 118.603 12.0281C118.603 12.8341 118.366 13.5276 117.895 14.1084C117.422 14.6853 116.736 15.1278 115.839 15.436C114.947 15.7442 113.868 15.8983 112.599 15.8983H108.24V13.8358H112.035C112.701 13.8358 113.255 13.7686 113.696 13.6343C114.136 13.5 114.464 13.2984 114.679 13.0298C114.899 12.7611 115.009 12.4272 115.009 12.0281C115.009 11.625 114.899 11.2853 114.679 11.0087C114.464 10.732 114.133 10.5226 113.687 10.3804C113.247 10.2342 112.691 10.1611 112.019 10.1611H109.666V20.2013H106.176ZM115.089 14.6774L119.192 20.2013H115.339L111.326 14.6774H115.089Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M92.6155 20.2013V8.06299H103.737V10.1789H96.105V13.0713H103.165V15.1871H96.105V18.0853H103.769V20.2013H92.6155Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M86.6367 11.9865C86.5238 11.6981 86.3654 11.4432 86.1612 11.222C85.9571 10.9967 85.7073 10.8071 85.4117 10.653C85.1216 10.4949 84.7885 10.3744 84.4124 10.2914C84.0418 10.2085 83.6308 10.167 83.1795 10.167C82.336 10.167 81.5946 10.3211 80.9552 10.6293C80.3213 10.9374 79.8269 11.3859 79.4724 11.9747C79.1178 12.5595 78.9405 13.2747 78.9405 14.1202C78.9405 14.9658 79.1151 15.6849 79.4643 16.2777C79.8136 16.8703 80.3078 17.3228 80.9472 17.6349C81.5865 17.943 82.3413 18.0971 83.2117 18.0971C84.0014 18.0971 84.6757 17.9945 85.2345 17.7889C85.7986 17.5795 86.2284 17.2852 86.5238 16.9059C86.8248 16.5265 86.9751 16.0781 86.9751 15.5604L87.6844 15.6375H83.4293V13.7054H90.3357V15.2345C90.3357 16.3013 90.0294 17.218 89.417 17.9846C88.8045 18.7471 87.9611 19.3359 86.8865 19.7508C85.812 20.1617 84.5817 20.3672 83.1956 20.3672C81.6483 20.3672 80.289 20.1162 79.1178 19.6144C77.9466 19.1087 77.0333 18.3915 76.3779 17.463C75.7277 16.5305 75.4027 15.4242 75.4027 14.1439C75.4027 13.1601 75.5961 12.2829 75.983 11.5124C76.3752 10.7379 76.9231 10.082 77.627 9.54466C78.3307 9.00729 79.1501 8.59833 80.0849 8.31779C81.0196 8.03724 82.0324 7.89697 83.1231 7.89697C84.0579 7.89697 84.9282 7.99773 85.7341 8.19925C86.54 8.39681 87.2545 8.67735 87.8778 9.04087C88.5063 9.40439 89.0195 9.83705 89.417 10.3389C89.8146 10.8367 90.0698 11.3859 90.1826 11.9865H86.6367Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M62.3375 20.2013H58.5983L64.2959 8.06299H68.7927L74.4822 20.2013H70.7429L66.6088 10.8368H66.4798L62.3375 20.2013ZM62.1039 15.4301H70.9363V17.4335H62.1039V15.4301Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M41.3562 20.2013L36.6338 8.06299H40.4456L43.1776 16.497H43.3146L46.3285 8.06299H49.5924L52.5983 16.5147H52.7433L55.4753 8.06299H59.2871L54.5646 20.2013H51.1638L48.0208 12.2652H47.8919L44.7571 20.2013H41.3562Z"
                  fill="#FCFCFC"
                />
                <path
                  d="M173.384 9.58351C172.954 9.58351 172.567 9.49028 172.223 9.30382C171.886 9.11018 171.616 8.84483 171.416 8.50776C171.222 8.1707 171.126 7.78343 171.126 7.34595C171.126 6.90849 171.222 6.52122 171.416 6.18415C171.616 5.84708 171.886 5.58531 172.223 5.39885C172.567 5.20522 172.954 5.1084 173.384 5.1084C173.815 5.1084 174.198 5.20522 174.535 5.39885C174.88 5.58531 175.148 5.84708 175.342 6.18415C175.543 6.52122 175.643 6.90849 175.643 7.34595C175.643 7.78343 175.543 8.1707 175.342 8.50776C175.148 8.84483 174.88 9.11018 174.535 9.30382C174.198 9.49028 173.815 9.58351 173.384 9.58351ZM173.384 9.1317C173.923 9.1317 174.353 8.97033 174.675 8.64761C175.005 8.31772 175.17 7.88383 175.17 7.34595C175.17 6.80808 175.005 6.37778 174.675 6.05506C174.353 5.72516 173.923 5.56021 173.384 5.56021C172.846 5.56021 172.413 5.72516 172.083 6.05506C171.76 6.37778 171.599 6.80808 171.599 7.34595C171.599 7.88383 171.76 8.31772 172.083 8.64761C172.413 8.97033 172.846 9.1317 173.384 9.1317ZM172.61 8.51852V6.13036H173.524C173.79 6.13036 173.99 6.1949 174.127 6.32399C174.263 6.45308 174.331 6.60369 174.331 6.77581C174.331 6.91207 174.295 7.03399 174.223 7.14156C174.159 7.24197 174.051 7.32085 173.901 7.37822V7.48581C174.022 7.49297 174.108 7.53242 174.159 7.60413C174.216 7.67585 174.245 7.77267 174.245 7.89458V8.51852H173.793V7.87307C173.793 7.72247 173.718 7.64717 173.567 7.64717H173.062V8.51852H172.61ZM173.062 7.23838H173.524C173.646 7.23838 173.736 7.20252 173.793 7.13081C173.851 7.0591 173.879 6.97305 173.879 6.87264C173.879 6.77222 173.851 6.68976 173.793 6.62522C173.736 6.55709 173.646 6.52302 173.524 6.52302H173.062V7.23838Z"
                  fill="#FCFCFC"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2501_1394">
                <rect width="176.296" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* Nav links - Center on desktop */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-[32px] list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  data-cursor-label="GO"
                  className={`font-mono text-[11px] font-400 tracking-[1.5px] uppercase transition-colors cursor-target ${
                    isActive
                      ? "text-brand-yellow font-bold"
                      : "text-nav-text-muted hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA buttons */}
        <div className="flex items-center gap-[12px] shrink-0">
          {isAuthenticated ? (
            <a
              href={APP_URL}
              onClick={handleGoToTerminal}
              className="hidden sm:flex items-center justify-center px-[14px] md:px-[22px] py-[8px] md:py-[10px] h-[36px] bg-brand-yellow font-mono text-[11px] font-bold tracking-[1px] uppercase text-brand-blue whitespace-nowrap hover:bg-[#cdd91e] transition-colors clip-btn cursor-target"
            >
              Go to Terminal
            </a>
          ) : (
            <>
              <a
                href={loginHref}
                className="hidden lg:flex items-center justify-center px-[20px] py-[9px] border border-nav-border font-mono text-[11px] font-400 tracking-[1px] uppercase text-nav-text-muted hover:border-[#F0F0E8]/50 hover:text-nav-text transition-colors whitespace-nowrap cursor-target"
              >
                Login
              </a>
              <a
                href={getAccessHref}
                data-cursor-label="GO"
                onClick={() => trackInitiateCheckout("header_desktop")}
                className="hidden sm:flex items-center justify-center px-[14px] md:px-[22px] py-[8px] md:py-[10px] h-[36px] bg-brand-yellow font-mono text-[11px] font-bold tracking-[1px] uppercase text-brand-blue whitespace-nowrap hover:bg-[#cdd91e] transition-colors clip-btn cursor-target"
              >
                Get Access
              </a>
            </>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="flex md:hidden flex-col items-center justify-center w-[36px] h-[36px] gap-[4px] cursor-target z-110"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-[20px] h-[2px] bg-white rounded-full block"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-[20px] h-[2px] bg-white rounded-full block"
            />
            <motion.span
              animate={
                isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="w-[20px] h-[2px] bg-white rounded-full block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - portaled to body for proper stacking and solid background */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-9999 min-h-screen w-full flex flex-col pt-[84px] px-[20px]"
                style={{ backgroundColor: "rgba(5, 5, 16, 0.92)" }}
              >
                {/* Close button - visible above overlay since toggle is hidden behind it */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-[18px] right-[20px] md:right-[48px] flex items-center justify-center w-[36px] h-[36px] cursor-target z-10001"
                  aria-label="Close menu"
                >
                  <span className="relative w-[20px] h-[20px] block">
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rounded-full -translate-y-1/2 rotate-45" />
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rounded-full -translate-y-1/2 -rotate-45" />
                  </span>
                </button>
                <div className="flex flex-col gap-[32px]">
                  <ul className="flex flex-col gap-[24px] list-none p-0 m-0">
                    {navLinks.map(({ label, href }) => {
                      const isActive = pathname === href;
                      return (
                        <li key={href}>
                          <a
                            href={href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`font-display text-[32px] font-bold tracking-[-0.01em] uppercase transition-colors block ${
                              isActive ? "text-brand-yellow" : "text-white"
                            }`}
                          >
                            {label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="h-px bg-white/10 w-full" />

                  <div className="flex flex-col gap-[16px]">
                    {isAuthenticated ? (
                      <a
                        href={APP_URL}
                        onClick={(e) => {
                          setIsMenuOpen(false);
                          handleGoToTerminal(e);
                        }}
                        className="w-full flex items-center justify-center py-[16px] bg-brand-yellow font-mono text-[13px] font-bold tracking-[1.5px] uppercase text-black clip-btn"
                      >
                        Go to Terminal
                      </a>
                    ) : (
                      <>
                        <a
                          href={loginHref}
                          onClick={() => setIsMenuOpen(false)}
                          className="w-full flex items-center justify-center py-[16px] border border-white/10 font-mono text-[13px] font-bold tracking-[1.5px] uppercase text-white"
                        >
                          Login
                        </a>
                        <a
                          href={getAccessHref}
                          onClick={() => {
                            trackInitiateCheckout("header_mobile");
                            setIsMenuOpen(false);
                          }}
                          className="w-full flex items-center justify-center py-[16px] bg-brand-yellow font-mono text-[13px] font-bold tracking-[1.5px] uppercase text-black clip-btn"
                        >
                          Get Access
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
