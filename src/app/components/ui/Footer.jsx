"use client";

import Link from "next/link";

export default function Footer({
  siteData,
}) {
  const footerLinks = {
    Company: [

      {
        name: "About Us",
        href: "/about-us",
      },

      {
        name: "Blogs",
        href: "/blogs",
      },

      {
        name: "Services",
        href: "/services",
      },

      {
        name: "Contact",
        href: "/contact-us",
      },

    ],

    Services: [

      {
        name: "Wealth Elite",
      },

      {
        name: "Robo App",
      },

      {
        name: "Financial Website",
      },

      {
        name: "Business Booster",
      },

      {
        name: "Advisory X App",
      },

      {
        name:
          "Digital Marketing Services",
      },

    ],

    ContactUs: [
      {
        name: (
          <div className="flex flex-col gap-1">
            <span className="font-medium">
              Mobile :-
            </span>
            <span className="opacity-80 break-words">
              +91 {siteData?.phone || ""}
            </span>
          </div>
        ),
      },

      {
        name: (
          <div className="flex flex-col gap-1">
            <span className="font-medium">
              Email :-
            </span>
            <span className="opacity-80 break-all">
              {siteData?.email || ""}
            </span>
          </div>
        ),
      },

      {
        name: (
          <div className="flex flex-col gap-2 w-full max-w-[260px]">
            <span className="font-medium">
              Address :-
            </span>
            <div
              className="  text-[var(--rv-white)]  opacity-80 leading-7 [&_*]:m-0 [&_*]:whitespace-normal  [&_*]:break-words [&_*]:overflow-wrap-anywhere "
              dangerouslySetInnerHTML={{
                __html:
                  siteData?.address
                    ?.replace(
                      /&nbsp;/g,
                      " "
                    ) || "",
              }}
            />
          </div>
        ),
      },
    ],
  };

  return (

    <footer
      style={{
        backgroundImage:
          "url('/images/footer-bg-image.png')",
      }}
      className="bg-[var(--rv-primary-dark)] text-[var(--rv-white)] px-4 pb-16 md:pb-0" >
      <div className="max-w-7xl mx-auto py-8 md:pt-12 flex flex-col gap-5 md:gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="md:col-span-1 flex flex-col gap-4">

            <img
              src="/images/logo1.png"
              alt=""
              className="brightness-0 invert filter w-60 h-auto"
            />

            <div
              className="  text-[var(--rv-white)]  opacity-80 leading-7 [&_*]:m-0 [&_*]:whitespace-normal  [&_*]:break-words [&_*]:overflow-wrap-anywhere "
              dangerouslySetInnerHTML={{
                __html:
                  siteData?.description
                    ?.replace(
                      /&nbsp;/g,
                      " "
                    ) ||
                  "Revolutionize your mutual fund business with our comprehensive software.",
              }}
            />

          </div>

          {Object.entries(
            footerLinks
          ).map(
            ([title, links]) => (
              <div key={title}>
                <h6 className="tracking-widest text-[var(--rv-white)] font-semibold mb-5">
                  {title}
                </h6>
                <ul className="flex flex-col gap-4">
                  {links.map(
                    (l, index) => (
                      <li key={index}>
                        {l.href ? (
                          <Link
                            href={l.href}
                            className="text-[var(--rv-white)] opacity-80 hover:opacity-100 transition"
                          >
                            {l.name}
                          </Link>
                        ) : (
                          <div className="text-[var(--rv-white)] opacity-80">
                            {l.name}
                          </div>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
        <div className="flex items-center justify-center border-t pt-5 border-[var(--rv-white-light)] gap-4">
          <p className="text-[var(--rv-white)] opacity-80 text-center">
            © {new Date().getFullYear()}{" "}
            {
              siteData?.websiteName ||
              "Mutual Fund Software"
            }
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

  );

}