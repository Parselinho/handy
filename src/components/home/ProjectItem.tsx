import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  image,
  cardTitle,
  cardText,
  href,
  alt,
}: {
  image: string;
  cardTitle: string;
  cardText: string;
  href: string;
  alt: string;
}) => {
  return (
    <>
      <div
        className="pt-5 m-0 basis-full flex-grow-0 max-w-full "
        style={{ display: "initial" }}
      >
        <Link href={href} className="font-semibold block">
          <div
            className="bg-slate-200 flex h-20 w-full"
            style={{
              borderRadius: "16px",
              boxShadow:
                "0px 0px 4px 0px rgba(7, 7, 7, 0.10),0px 0px 8px 0px rgba(4, 46, 41, 0.14)",
            }}
          >
            <div className="h-20 min-w-24 w-24 relative">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute left-0 top-0 right-0 bottom-0"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="flex flex-col gap-2 justify-center overflow-hidden pl-4 pr-4">
              <h6
                className="m-0 font-semibold tracking-tighter text-sm overflow-hidden whitespace-no-wrap"
                style={{ lineHeight: "132%", textOverflow: "ellipsis" }}
              >
                {cardTitle}
              </h6>
              <p
                className="m-0 font-medium tracking-tighter text-xs"
                style={{ lineHeight: "130%" }}
              >
                {cardText}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default ProjectItem;
