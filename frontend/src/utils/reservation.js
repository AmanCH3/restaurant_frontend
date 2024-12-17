import Swal from "sweetalert2";
import { baseURL } from "./useAxios";

const RESERVATION_API_URL = `${baseURL}/reservation/create/`;

export const createReservation = async ({resturant, name, date, time, email, number_of_people, notes}) => {
  try {
    const response = await fetch(RESERVATION_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resturant,
        name,
        date,
        time,
        email,
        number_of_people,
        notes,
      }),
    });

    if (response.status === 201) {
      const data = await response.json();
      Swal.fire({
        title: "Reservation Successful",
        icon: "success",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        window.location.reload();
      });
      return data;
    } else {
      const errorData = await response.json();
      Swal.fire({
        title: "Reservation Failed",
        text: errorData.message || "An error occurred.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return errorData;
    }
  } catch (error) {
    console.error("Error creating reservation:", error);
    Swal.fire({
      title: "Server Error",
      text: "Unable to process your reservation at this time. Please try again later.",
      icon: "error",
      toast: true,
      timer: 3000,
      position: "top-right",
      timerProgressBar: true,
      showConfirmButton: false,
    });
    throw error;
  }
};
