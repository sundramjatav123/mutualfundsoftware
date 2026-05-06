import Swal from "sweetalert2";

export const showAlert = ({
  icon = "success",
  title = "",
  text = "",
  timer = 2000,
}) => {

  return Swal.fire({

    toast: true,

    position: "top",

    icon,

    title,

    text,

    showConfirmButton: false,

    timer,

    timerProgressBar: true,

    background: "var(--rv-card)",

    color: "var(--rv-text)",

    customClass: {

      popup:
        "rounded-2xl border border-[var(--rv-border)] shadow-2xl backdrop-blur-xl",

      title:
        "text-sm md:text-base font-semibold",

      htmlContainer:
        "text-xs md:text-sm opacity-80",

      timerProgressBar:
        "bg-[var(--rv-primary)]",

    },

    didOpen: (toast) => {

      toast.onmouseenter = Swal.stopTimer;

      toast.onmouseleave = Swal.resumeTimer;

    },

  });

};