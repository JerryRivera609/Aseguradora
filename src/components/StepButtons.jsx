export default function StepButtons({ 
  onPrevious, 
  onNext, 
  showPrevious = true, 
  showNext = true,
//   previousText = "Cancelar",
  nextText = "Continuar",
  isFirstStep = false,
  isLastStep = false
}) {
  return (
    <div className="flex justify-end items-center space-x-4 rounded-2xl">
      {showPrevious && (
        <button 
          onClick={onPrevious}
          className="rounded-full border-1 border-border bg-container text-foreground px-4 py-2 hover:cursor-pointer hover:text-container hover:bg-primary-hover"
        >
          {isFirstStep ? "Cancelar" : "Anterior"}
        </button>
      )}
      {showNext && (
        <button 
          onClick={onNext}
          className="rounded-full border-1 border-border bg-container text-foreground px-4 py-2 hover:cursor-pointer hover:text-container hover:bg-primary-hover"
        >
          {isLastStep ? "Finalizar" : nextText}
        </button>
      )}
    </div>
  );
}