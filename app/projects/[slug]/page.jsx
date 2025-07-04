import jsonData from "@/json/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import FixedButon from "@/components/FixedButton";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ScrollDownButton from "./ScrollDownButton";

function Page(props) {
    const params = props.params;
    const data = jsonData.Projects.find((item) => item.slug === params.slug);

    if (data === undefined) {
		return (
			<>
				<NotFound />
			</>
		);
	} else if (!data) {
		return (
			<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
				<div className="min-h-screen flex justify-center items-center w-full">
					<div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
						<div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
						</div>
						<div className="flex justify-start items-start flex-col mb-5 w-full p-4">
							<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded  w-full h-full "></div>
						</div>
					</div>
				</div>
				{/* images */}
				<div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
					<div className="w-full h-auto aspect-video">
						<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
					</div>
				</div>
			</div>
		);
	}
    return (
		<div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
			<FixedButon href="/projects">
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="text-black pr-10"
				/>
			</FixedButon>
			<ScrollDownButton />
			<div className="min-h-screen flex justify-center items-center">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2  mt-10 md:mt-0">
					<div className="min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Project
							</h2>
							<h1 className="text-4xl font-medium text-neutral-900">
								{data.title}
							</h1>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Technology
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.tech.join(", ")}
							</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Year
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.year}
							</p>
						</div>
						{data.preview && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Preview
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									<a
										href={data.preview}
										target="_blank"
										rel="noopener noreferrer">
										Preview{" "}
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="ml-3"
										/>
									</a>
								</p>
							</div>
						)}
						{data.code && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Source Code
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									<a
										href={data.code}
										target="_blank"
										rel="noopener noreferrer">
										Github{" "}
										<FontAwesomeIcon
											icon={faGithub}
											className="ml-3"
										/>
									</a>
								</p>
							</div>
						)}
					</div>
					<div className="flex justify-start items-start flex-col mb-5 ">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
							Description
						</h2>
						{data.desc.map((desc, index) => (
							<p
								key={index}
								className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5">
								{desc}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* images */}
			<div className="mx-auto grid grid-cols-1 p-5 md:p-20 w-full">
				<div className="w-full h-auto text-center flex flex-col justify-center ">
					{data.images.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={`Project Image ${index + 1}`}
							className="mb-5 h-auto max-h-screen max-w-7xl mx-auto"
							width={1920}
							height={1080}
							blurDataURL={image}
							layout="responsive"
							objectFit="contain"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Page;

export function generateStaticParams() {
  // Ambil semua slug dari data.json
  return jsonData.Projects.filter(p => p.show).map(project => ({
    slug: project.slug
  }));
}
