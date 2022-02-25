import Image from "next/image";
import Link from "next/link";
import styles from "../styles/modules/Header.module.css";
import { useEffect, useState } from "react";

const Header = ({ home }) => {
  const [isToggled, setIsToggled] = useState(false);

  // retain dark mode toggle cross site
  useEffect(() => {
    let input = document.querySelector("input");
    if (localStorage.getItem("theme") === "dark") {
      setIsToggled(true);
      input.checked = true;
    } else {
      setIsToggled(false);
      input.checked = false;
    }
  }, []);

  const handleChange = () => {
    let checked = document.querySelector("input").checked;

    if (checked) {
      localStorage.setItem("theme", "dark");
      setIsToggled(true);
    } else {
      localStorage.setItem("theme", "light");
      setIsToggled(false);
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex flex-col items-center my-20">
      {home ? (
        <>
          <Image
            priority
            src="/images/profile.jpg"
            height={200}
            width={200}
            alt="Alexander Brooks"
            className="rounded-full"
          />
          <h1 className="my-10">Alexander Brooks</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                height={150}
                width={150}
                alt="Alexander Brooks"
                className="rounded-full"
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <h2>Alexander Brooks</h2>
            </a>
          </Link>
        </>
      )}
      <div className={styles.toggleContainer}>
        {isToggled ? (
          <div className="mr-5">
            <Image src="/images/light-sun-final.png" height={35} width={35} />
          </div>
        ) : (
          <div className="mr-5">
            <Image src="/images/dark-sun-final.png" height={35} width={35} />
          </div>
        )}
        <label className={styles.toggle}>
          <input type="checkbox" onChange={handleChange} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        {isToggled ? (
          <div className="ml-5">
            <Image src="/images/light-moon-final.png" height={23} width={35} />
          </div>
        ) : (
          <div className="ml-5">
            <Image src="/images/dark-moon-final.png" height={23} width={35} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
