import Image from "next/image";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";

type SocialLink = {
  label: string;
  href: string;
  className: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/username",
    className: "github",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/username",
    className: "linkedin",
    icon: <LinkedInIcon />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@username",
    className: "youtube",
    icon: <YouTubeIcon />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/username",
    className: "instagram",
    icon: <InstagramIcon />,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/username",
    className: "twitter",
    icon: <XIcon />,
  },
];

const snowflakes = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 101}%`,
  delay: `${(index % 10) * -0.8}s`,
  duration: `${7 + (index % 7)}s`,
  size: `${3 + (index % 5)}px`,
}));

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="sky-glow" aria-hidden="true" />

      <div className="snow" aria-hidden="true">
        {snowflakes.map((snowflake) => (
          <span
            key={snowflake.id}
            style={{
              left: snowflake.left,
              animationDelay: snowflake.delay,
              animationDuration: snowflake.duration,
              width: snowflake.size,
              height: snowflake.size,
            }}
          />
        ))}
      </div>

      <section className="profile-card" aria-label="Profile links">
        <div className="avatar-wrap">
          <Image
            src="/avatar-placeholder.svg"
            alt="Foto profil"
            width={112}
            height={112}
            priority
            className="avatar"
          />
        </div>

        <p className="username">@username</p>
        <h1>My Digital Space</h1>
        <p className="intro">Temukan semua profil dan karya saya dalam satu tempat.</p>

        <nav className="social-list" aria-label="Social media links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`social-link ${link.className}`}
            >
              <span className="icon" aria-hidden="true">
                {link.icon}
              </span>
              <span>{link.label}</span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>

        <p className="footer-note">Made with Next.js</p>
      </section>
    </main>
  );
}
