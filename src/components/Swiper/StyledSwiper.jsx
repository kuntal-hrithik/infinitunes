import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { FaPlay } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { decode } from "../../util/decodeHtml";
import useWindowResize from "../../hooks/useWindowResize";
import { cartSubtitle, itemCount, spaceBetween } from "./SwiperFns";
import { StyledSlider, SwiperComponent } from "./StyledSwiper.style";

const StyledSwiper = ({ source, isBanner = false }) => {
	const navigate = useNavigate();
	const { winWidth } = useWindowResize();

	const redirect = (item) => {
		const id = item.id || item.listid,
			type = item.type || item.data_type,
			title = (item.title || item.listname)
				.toLowerCase()
				.replace(/[^\w\s]/gi, "")
				.replaceAll(" ", "+");

		if (type === "album" || type === "show") {
			navigate(`/album/${id}/${title}`, { state: { id, type } });
		}

		if (type === "playlist" || type === "featured")
			navigate(`/playlist/${id}/${title}`, { state: { id, type } });
	};

	return (
		<SwiperComponent
			isbanner={isBanner ? 1 : 0}
			slidesPerView={itemCount(winWidth)}
			spaceBetween={
				isBanner ? spaceBetween(winWidth)[0] : spaceBetween(winWidth)[1]
			}
			autoplay={{
				delay: isBanner ? 2000 : 4000,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			// mousewheel={true}
			centeredSlides={true}
			navigation={true}
			loop={true}
			modules={[Autoplay, Navigation]}
		>
			{source.map((item, index) => (
				<StyledSlider key={index} isbanner={isBanner ? 1 : 0}>
					<div>
						<img
							src={item.image.replace("150x150", "500x500")}
							alt={decode(item.title)}
						/>
						<button onClick={() => redirect(item)}>
							<FaPlay size={50} color="#74f2ce" />
						</button>
						{!isBanner && (
							<>
								<h4>
									{decode(item.title) !== undefined
										? decode(item.title)
										: decode(item.listname)}
								</h4>
								{cartSubtitle(item)}
							</>
						)}
					</div>
				</StyledSlider>
			))}
		</SwiperComponent>
	);
};

export default StyledSwiper;
