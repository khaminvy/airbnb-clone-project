import Image from "next/image"
import ContactButton from "../components/ContactButton"
import PropertyList from "../components/properties/PropertyList"

const MyReservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-xl">My Reservation</h1>
            
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                className="hover:scale-110 object-cover transition w-full h-full"
                                alt="Beach house"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date:</strong> 14/2/2025</p>
                        <p className="mb-2"><strong>Check out date:</strong> 16/2/2025</p>
                        <p className="mb-2"><strong>Number 0f nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total price:</strong> $200</p>

                        <div className="mt-6 cursor-pointer inline-block py-4 px-6 rounded-xl bg-airbnb hover:bg-airbnb-dark">Go to property</div>
                    </div>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                className="hover:scale-110 object-cover transition w-full h-full"
                                alt="Beach house"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date:</strong> 14/2/2025</p>
                        <p className="mb-2"><strong>Check out date:</strong> 16/2/2025</p>
                        <p className="mb-2"><strong>Number 0f nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total price:</strong> $200</p>

                        <div className="mt-6 cursor-pointer inline-block py-4 px-6 rounded-xl bg-airbnb hover:bg-airbnb-dark">Go to property</div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default MyReservationsPage