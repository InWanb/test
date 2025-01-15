const openBtn = document.querySelector(".open-modal-window")
const modalWin = document.querySelector(".modal_window")
const blurEffect = document.querySelector("#BlurEffect")

const inputValueName = document.querySelector(".InputName-tel")
const inputValueFamilia = document.querySelector(".InputModalFamilia-tel")
const inputValuetel = document.querySelector(".InputModalTel-tel")
const inputValuePost = document.querySelector(".InputModalPost-tel")

const regButton = document.querySelector(".modal-submite-button")

const ModalFrame = document.querySelector(".modal-frame")
const showInfoWin = document.querySelector(".modal-showinfo-window")

openBtn.addEventListener("click", () => {
    modalWin.classList.remove("hidden")
    blurEffect.classList.remove("hidden")
    
})
window.addEventListener("click", (e) => {
    if(e.target.contains(blurEffect) && !e.target.contains(openBtn)){
        modalWin.classList.add("hidden")
        blurEffect.classList.add("hidden")
    }
})
const addTask = e => {
    e.preventDefault()

    const inputName = inputValueName.value
    const inputFamilia = inputValueFamilia.value
    const inputTel = inputValuetel.value
    const inputPost = inputValuePost.value
    
    const taskHTML = `
    <div class="modal-showinfo-window">
        <div class="modal-showinfo-frame">
            <div class="modal-showinfo-text">
                <span class="modal-showinfo-p1">${inputName}</span><br>
                <span class="modal-showinfo-p2">${inputFamilia}</span><br>
                <span class="modal-showinfo-p3">${inputTel}</span><br>
                <span class="modal-showinfo-p4">${inputPost}</span>
            </div>
            <div class="modal-showinfo-button" data-action="delete">
                <button class="modal-delete-button" data-action="delete">DELETE</button>
            </div>
        </div>
    </div>`
    ModalFrame.insertAdjacentHTML("beforeend", taskHTML)
    ModalFrame.value = ''
}
const deleteTask = (e) => {
    if (e.target.dataset.action === "delete") {
        const parentNode = e.target.closest(".modal-showinfo-window");
        if (parentNode) {
            parentNode.remove();
        }
    }
};
ModalFrame.addEventListener("submit", addTask)
ModalFrame.addEventListener("click", deleteTask)