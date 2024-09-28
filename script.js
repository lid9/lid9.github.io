function changeImage(image) {
  if (image == "rice") {
    document.getElementById("my-image").src =
      "https://www.allrecipes.com/thmb/RKpnSHLUDT2klppYgx8jAF47GyM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/52490-PuertoRicanSteamedRice-DDMFS-061-4x3-3c3da714aa614037ad1c135ec303526d.jpg";
  } else if (image == "clear") {
    document.getElementById("my-image").src =
      "https://www.envelopments.com/uploads/papers/328/front_image/soft-gray_22in-sq-150dpi_gmund_v2.jpg";
  }
}
