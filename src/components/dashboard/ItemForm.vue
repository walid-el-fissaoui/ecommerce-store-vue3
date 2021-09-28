<template>
  <div class="border-t p-4">
    <h2 class="font-semibold text-lg px-2 text-custom-color-9">Items :</h2>
    <form class="p-4 flex">
      <div class="w-60 mr-4">
        <div
          class="
            w-full
            h-60
            border
            rounded
            overflow-hidden
            text-5xl text-custom-color-9
            flex
            justify-center
            items-center
          "
        >
          <i class="far fa-image"></i>
          <!-- <img src="https://via.placeholder.com/360x360.png/00eebb?text=animals+sit" alt="" class="w-full h-full object-cover"> -->
        </div>
        <button
          class="
            btn btn-white
            bg-gray-100
            text-custom-color-9
            w-full
            justify-center
            mt-4
            rounded
          "
        >
          upload
        </button>
      </div>
      <div class="w-6/12 flex-grow">
        <div class="flex items-center mb-4">
          <label class="w-24">Color :</label>
          <ul class="flex items-center">
            <li class="flex items-center rounded border mx-2">
              <div class="w-10 h-10 flex items-center justify-center">
                <span
                  class="
                    block
                    w-6
                    h-6
                    mx-1
                    cursor-pointer
                    rounded-full
                    bg-red-500
                  "
                ></span>
              </div>
              <div
                class="w-10 h-10 flex items-center justify-center bg-gray-200"
              >
                <button>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </li>
            <li class="flex items-center rounded border mx-2">
              <div class="w-10 h-10 flex items-center justify-center">
                <span
                  class="
                    block
                    w-6
                    h-6
                    mx-1
                    cursor-pointer
                    rounded-full
                    bg-red-500
                  "
                ></span>
              </div>
              <div
                class="w-10 h-10 flex items-center justify-center bg-gray-200"
              >
                <button>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </li>
            <li class="flex items-center rounded border mx-2">
              <div class="w-10 h-10 flex items-center justify-center">
                <span
                  class="
                    block
                    w-6
                    h-6
                    mx-1
                    cursor-pointer
                    rounded-full
                    bg-red-500
                  "
                ></span>
              </div>
              <div
                class="w-10 h-10 flex items-center justify-center bg-gray-200"
              >
                <button>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </li>
            <li class="flex items-center rounded border mx-2">
              <div class="w-10 h-10 flex items-center justify-center">
                <span
                  class="
                    block
                    w-6
                    h-6
                    mx-1
                    cursor-pointer
                    rounded-full
                    bg-red-500
                  "
                ></span>
              </div>
              <div
                class="w-10 h-10 flex items-center justify-center bg-gray-200"
              >
                <button>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </li>
          </ul>
          <button class="rounded-full text-custom-color-3 border w-8 h-8 ml-6">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="flex items-center mb-4">
          <label class="w-24">Size :</label>
          <ul class="flex items-center">
            <li class="flex items-center rounded border mx-2">
              <div class="w-10 h-10 flex items-center justify-center">
                <span class="block w-6 h-6 cursor-pointer text-center">S</span>
              </div>
              <div
                class="w-10 h-10 flex items-center justify-center bg-gray-200"
              >
                <button>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </li>
            <li class="flex items-center rounded border mx-2">
              <div class="w-10 h-10 flex items-center justify-center">
                <span class="block w-6 h-6 cursor-pointer text-center">S</span>
              </div>
              <div
                class="w-10 h-10 flex items-center justify-center bg-gray-200"
              >
                <button>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </li>
            <li class="flex items-center rounded border mx-2">
              <div class="w-10 h-10 flex items-center justify-center">
                <span class="block w-6 h-6 cursor-pointer text-center">S</span>
              </div>
              <div
                class="w-10 h-10 flex items-center justify-center bg-gray-200"
              >
                <button>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </li>
            <li class="flex items-center rounded border mx-2">
              <div class="w-10 h-10 flex items-center justify-center">
                <span class="block w-6 h-6 cursor-pointer text-center">S</span>
              </div>
              <div
                class="w-10 h-10 flex items-center justify-center bg-gray-200"
              >
                <button>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </li>
          </ul>
          <button class="rounded-full text-custom-color-3 border w-8 h-8 ml-6">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="flex items-center mb-4">
          <label class="w-24">Quantity :</label>
          <input
            type="number"
            min="0"
            class="h-10 border rounded px-4 py-2 mx-2 bg-gray-50"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>