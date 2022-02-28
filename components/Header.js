import Image from "next/image";
import Link from "next/link";
import styles from "../styles/modules/Header.module.css";
import { useEffect, useState } from "react";

const Header = ({ home }) => {
  const [isToggled, setIsToggled] = useState(false);

  // Load Dark Mode on Component/Page Loads
  useEffect(() => {
    let input = document.querySelector("input");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsToggled(true);
      input.checked = true;
      document.documentElement.classList.add("dark");
    } else {
      setIsToggled(false);
      input.checked = false;
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Load Dark Mode on Toggle Events
  const handleChange = () => {
    let checked = document.querySelector("input").checked;

    if (checked) {
      localStorage.setItem("theme", "dark");
      setIsToggled(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsToggled(false);
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex flex-col items-center mt-20 mb-10">
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
          <h1 className="my-10 text-3xl dark:text-primary-100">Alexander Brooks</h1>
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
              <h2 className="my-8 text-xl dark:text-primary-100">Alexander Brooks</h2>
            </a>
          </Link>
        </>
      )}
      {isToggled ? (
        <div className={`${styles.toggleContainer} bg-tertiary-100`}>
          <div className="mr-3">
            <Image src="/images/light-sun-final.png" height={35} width={35} alt={'light sun image'} />
          </div>
          <label className={styles.toggle}>
            <input type="checkbox" onChange={handleChange} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <div className="ml-3">
            <Image src="/images/light-moon-final.png" height={23} width={35} alt={'light moon image'}/>
          </div>
        </div>
      ) : (
        <div className={`${styles.toggleContainer} bg-primary-100`}>
          <div className="mr-3">
            <Image src="/images/dark-sun-final.png" height={35} width={35} alt={'dark sun image'} />
          </div>
          <label className={styles.toggle}>
            <input type="checkbox" onChange={handleChange} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <div className="ml-3">
            <Image src="/images/dark-moon-final.png" height={23} width={35} alt={'dark moon image'} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
