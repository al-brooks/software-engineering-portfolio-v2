import Link from "next/link";

const MenuCard = ({ option, url }) => {
  // longer styling sequence:
  const cardClasses = [
    "mb-5",
    "py-5",
    "px-10",
    "rounded-lg",
    "bg-primary-100",
    "hover:bg-tertiary-100",
    "hover:text-primary-100",
    "dark:bg-tertiary-100",
    "dark:text-primary-100",
    "dark:hover:bg-primary-100",
    "dark:hover:text-tertiary-100"
  ];

  return (
    <Link href={url}>
      <a>
        <div className={cardClasses.join(" ")}>
          <h2 className="text-lg">{option}</h2>
        </div>
      </a>
    </Link>
  );
};

export default MenuCard;
