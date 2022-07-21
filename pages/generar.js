import React, { useState } from "react";
import QRCode from '../components/QrCode';
import Layout from "../components/ui/Layout";
import Link from 'next/link'


const Generate = () => {

    const [url, setUrl] = useState();
    const [options, setOptions] = useState();
    const [downloadUrl, setDownloadUrl] = useState();

    function generateQRCode(){
        let website = document.getElementById("website").value;
        console.log(website)
        if (website) {
        
            setOptions({
                ecLevel: 'M', //The error correction level of the QR Code
                enableCORS: false, //Enable crossorigin attribute
                size: 250, //The size of the QR Code
                quietZone: 10, //The size of the quiet zone around the QR Code. This will have the same color as QR Code bgColor
                bgColor: "#FFFFFF", //Background color
                fgColor: "#000000", //Foreground color
                logoImage: "", //The logo image. It can be a url/path or a base64 value
                logoWidth: 180,
                logoHeight: 40,
                logoOpacity: 1,
                qrStyle: "squares" //Style of the QR Code modules - dots or squares
            });
            setUrl(website)
            
            document.getElementById("qrcode-container").style.display = "block";
            
            setTimeout(() => {
                setDownloadUrl(document.getElementById('react-qrcode-logo').toDataURL());
            }, 100);
        }
        else{
            alert("Please enter a valid URL");
        }
    }

    return (
        <Layout>
            <div class="max-w-7xl mx-auto">
                <div>
                    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div class="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <span class="sr-only">Genera tu QR</span>
                                <img alt="generatuqr" class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
                            </a>
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>

                <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">Genera tu</span>{" "}
                        <span class="block text-indigo-600 xl:inline">QR</span>{" "}
                        <span class="block xl:inline">GRATIS aquí</span>
                        </h1>
                        {/* <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Genera y descarga tu QR aquí sin compromisos. Sin registro, sin pago.</p> */}
                        <div class="mt-5 sm:mt-8">
                            <input type="url" id="website" name="website" placeholder="https://generarcodigo.com" required
                                className="px-2 border-gray-300 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md px-8 py-3 mb-4"
                            />

                            <button  type="button" onClick={generateQRCode}
                                className="flex items-center justify-center mb-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                                Generar
                            </button>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div id="qrcode-container">
                            {url ? 
                                <>
                                    <QRCode 
                                        url={url}
                                        options={options}
                                        className="my-4"
                                    />
                                    <div className="flex justify-center">
                                        { downloadUrl ? <>
                                                <a  href={downloadUrl} download="myqr.png"
                                                    className="flex items-center justify-center mb-4 px-4 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-5"
                                                >
                                                    Descargar
                                                </a>
                                            </>
                                        : null }
                                        {/* <button type="button"
                                            className="flex items-center justify-center mb-4 px-4 py-1 border border-transparent text-base font-medium rounded-md text-white text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-lg md:px-5"
                                        >
                                            Resetear
                                        </button> */}
                                    </div>
                                </>
                                : null 
                            }
                            
                        </div>
                    </div>
                </main> 
            </div>
        </Layout>
    );
}

export default Generate;