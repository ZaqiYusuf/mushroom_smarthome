import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  { src: '/assets/img/about.png', legend: 'Gambar 1' },
  { src: '/assets/img/about.png', legend: 'Gambar 2' },
  { src: '/assets/img/about.png', legend: 'Gambar 3' },
  { src: '/assets/img/about.png', legend: 'Gambar 4' },
  { src: '/assets/img/about.png', legend: 'Gambar 5' },
  { src: '/assets/img/about.png', legend: 'Gambar 6' },
];

const DemoCarousel = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel
        showArrows={false} // Matikan tombol panah bawaan
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2"
              style={{
                zIndex: 2,
              }}
            >
              <FaArrowLeft className="text-black" /> {/* Tambahkan panah ke kiri */}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className=""
              style={{
                zIndex: 2,
              }}
            >
              <FaArrowRight className="text-black" /> {/* Tambahkan panah ke kanan */}
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex justify-between">
            {images.slice(index, index + 3).map((imageInRow, idx) => (
              <div key={idx} className="w-1/3 px-2"> {/* Tambahkan margin */}
                <img src={imageInRow.src} alt={`Image ${index + idx}`} className="mx-auto" /> {/* Tengahkan gambar */}
                <p className="gambar text-center">{imageInRow.gambar}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
