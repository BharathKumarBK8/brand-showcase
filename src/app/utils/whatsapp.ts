export const openWhatsApp = () => {
  const phoneNumber = "+919945149151";
  const message = encodeURIComponent(
    "Hi, I’d like to book a dental appointment.",
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
};
