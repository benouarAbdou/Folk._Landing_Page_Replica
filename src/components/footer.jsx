import { Link } from "react-router-dom";
import Button from "./Button.jsx"; // Assuming Button is a custom component for buttons
import grain from "../assets/images/grain.png"; // Import the grain image

const Footer = () => {
  // Define link data
  const footerLinks = [
    {
      title: "Product",
      links: [
        { to: "/migrate-crm", label: "Migrate my CRM" },
        { to: "/folkx-extension", label: "Download FolkX Extension" },
        { to: "/desktop-app", label: "Download Desktop App" },
        { to: "/vs-hubspot", label: "Folk vs HubSpot" },
        { to: "/vs-pipedrive", label: "Folk vs Pipedrive" },
        { to: "/vs-airtable", label: "Folk vs Airtable" },
        { to: "/vs-monday", label: "Folk vs Monday" },
        { to: "/other-crm-comparisons", label: "Other CRM Comparisons" }
      ]
    },
    {
      title: "Usecases",
      links: [
        { to: "/crm-agencies", label: "CRM for Agencies" },
        { to: "/crm-sales", label: "CRM for Sales" },
        { to: "/crm-partnerships", label: "CRM for Partnerships" },
        { to: "/crm-startups", label: "CRM for Startups" },
        { to: "/crm-venture-capital", label: "CRM for Venture Capital" }
      ]
    },
    {
      title: "Resources",
      links: [
        { to: "/help-center", label: "Help Center" },
        { to: "/tutorials", label: "Tutorials" },
        { to: "/blog", label: "Blog" },
        { to: "/changelog", label: "Explore the Changelog" },
        { to: "/free-tools", label: "Free Tools" },
        { to: "/famous-lists", label: "Famous Lists" },
        { to: "/other-resources", label: "Other Resources" }
      ]
    },
    {
      title: "Company",
      links: [
        { to: "/careers", label: "We're Hiring" },
        { to: "/affiliate", label: "Become an Affiliate" },
        { to: "/contact", label: "Contact Us" }
      ]
    }
  ];

  const bottomLinks = [
    { to: "/terms", label: "Terms of Use" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/cookie-settings", label: "Cookie Settings" }
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      href: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      href: "https://youtube.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    }
  ];

  return (
    <footer
      className="bg-[#0E0E0E] text-white py-12"
      style={{
        backgroundImage: `url(${grain})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
      }}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Trial text and buttons */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-12 gap-6">
          <h2 className="text-6xl font-bold text-left font-uxum normal">
            Start 14-day <br /> free trial on Folk
          </h2>
          <div className="flex xl:flex-col flex-row gap-4">
            <Button to="/try-free" variant="white">
              Try for Free
            </Button>
            <Button to="/demo" variant="black">
              Get a Demo
            </Button>
          </div>
        </div>

        {/* Bottom Columns: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xl">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gray Divider */}
        <div className="border-t  border-white opacity-10 my-8"></div>

        {/* Bottom Row: Links and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {bottomLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:underline text-xl"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-white text-xl px-2 hidden sm:block">|</span>
            <span className="text-xl">English</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
