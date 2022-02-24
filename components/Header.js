import Image from "next/image";
import Link from "next/link";

const Header = ({ home }) => {
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
    </header>
  );
};

export default Header;
