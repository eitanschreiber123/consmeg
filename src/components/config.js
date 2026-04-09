"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone } from "lucide-react";

const ResizableDoor = ({ image }) => {
  const [size, setSize] = useState(60);

  return (
    <motion.img
      src={image}
      initial={{ y: 0 }}
      whileHover={{ y: -150 }}
      transition={{ duration: 0.6 }}
      style={{ width: `${size}%` }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-90 cursor-pointer"
      onWheel={(e) => {
        e.preventDefault();
        setSize((prev) => Math.max(30, Math.min(100, prev - e.deltaY * 0.05)));
      }}
    />
  );
}


const DoorConfigurator = () => {
  const [type, setType] = useState("Seccional");
  const [color, setColor] = useState("Gris");
  const [width, setWidth] = useState(3);
  const [height, setHeight] = useState(2);
  const [motor, setMotor] = useState(true);
  const [userImage, setUserImage] = useState(null);

  const images = {
    Seccional: "/consmeg_13.jpg",
    Enrollable: "/consmeg_7.jpg",
    Corrediza: "/consmeg_27.jpg",
    Abatible: "/consmeg_22.jpg",
  };

  const basePrices = {
    Seccional: 300,
    Enrollable: 250,
    Corrediza: 200,
    Abatible: 180,
  };

  const price = Math.round(basePrices[type] * width * height + (motor ? 250 : 0));

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUserImage(URL.createObjectURL(file));
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Configura tu puerta</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div>
            <h3>Tipo</h3>
            <div className="flex gap-2 flex-wrap">
              {Object.keys(images).map((t) => (
                <button key={t} onClick={() => setType(t)}
                  className={`px-3 py-2 rounded ${type===t?"bg-green-500 text-black":"bg-gray-800"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2">Sube una foto de tu casa</h3>
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="upload-image"
              className="inline-block bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-lg cursor-pointer"
            >
              Subir imagen
            </label>
          </div>

          <div>
            <h3>Color</h3>
            <div className="flex gap-2">
              {["Gris","Negro","Blanco"].map(c=> (
                <button key={c} onClick={()=>setColor(c)}
                  className={`px-3 py-2 rounded ${color===c?"bg-green-500 text-black":"bg-gray-800"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3>Dimensiones</h3>
            <div className="flex gap-2">
              <input type="number" value={width} onChange={(e)=>setWidth(Number(e.target.value))} className="p-2 bg-gray-900" />
              <input type="number" value={height} onChange={(e)=>setHeight(Number(e.target.value))} className="p-2 bg-gray-900" />
            </div>
          </div>

          <div>
            <label>
              <input type="checkbox" checked={motor} onChange={()=>setMotor(!motor)} /> Automatización
            </label>
          </div>

          <div className="bg-gray-900 p-4 rounded">
            <h3>Precio estimado</h3>
            <p className="text-green-400 text-xl">${price}</p>
          </div>

          <button
            onClick={() => window.open(`https://wa.me/593XXXXXXXXX?text=Quiero cotizar una puerta ${type}`)}
            className="bg-green-500 px-6 py-3 rounded text-black font-bold flex gap-2 items-center"
          >
            <Phone /> WhatsApp
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          {userImage ? (
            <div className="relative">
              <img src={userImage} className="rounded-xl max-h-[400px]" />
              <ResizableDoor image={images[type]} />
            </div>
          ) : (
            <motion.img src={images[type]}className="rounded-xl shadow-lg"/>
          )}
        </div>
      </div>
    </section>
  );
}

export default DoorConfigurator