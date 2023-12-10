export function Welcome() {
  let clickCounter = 1;
  messagesIterator(0)
  document.querySelector("#nextBtn").addEventListener('click', () => {
    clickCounter < messages.length ? (messagesIterator(clickCounter), clickCounter++) : (clickCounter = 0, document.querySelector("#welcome").classList.add('hidden'));
  })
}

const messages = [
  `
    <div class="text-background transition translate-y-3/4 duration-700 delay-500 flex flex-col justify-center items-center gap-4">
          <h2 id="text" class=text-3xl sm:text-4xl font-extrabold tracking-wider">Welcome Human!!!</h2>
          <p class="sm:tracking-wider">Do you have what it takes to save the world?</p>
    </div>
    `,
  `
    <div class="text-background transition translate-y-3/4 duration-700 delay-500 flex flex-col justify-center items-center gap-4">
          <h2 id="text" class=text-3xl sm:text-4xl font-extrabold tracking-wider">AI is taking over
          the world!!!</h2>
          <p class="sm:tracking-wider">Only you can save it by winning RPS game...</p>
    </div>
    `,
  `
    <div class="text-background transition translate-y-3/4 duration-700 delay-500 flex flex-col justify-center items-center gap-4">
          <h2 id="text" class=text-3xl sm:text-4xl font-extrabold tracking-wider">Can You beat AI & save the world?</h2>
          <p class="sm:tracking-wider">First one to score 5 points wins the game...</p>
    </div>
    `,
  `
    <div class="text-background transition translate-y-3/4 duration-700 delay-500 flex flex-col justify-center items-center gap-4">
          <h2 id="text" class=text-3xl sm:text-4xl font-extrabold tracking-wider">Let's Get Started!!!</h2>
          <p class="sm:tracking-wider">Choose your weapon wisely...</p>
    </div>
    `
]

function messagesIterator(count) {
  document.querySelector("#outcome").innerHTML = `${messages[count]}`


  setTimeout(() => {
    document.querySelector("#outcome div").classList.remove("text-background");
  }, 200)
  setTimeout(() => {
    document.querySelector("#outcome div").classList.remove("translate-y-3/4")
  }, 300)
}