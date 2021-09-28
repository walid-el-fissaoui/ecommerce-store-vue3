<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex justify-between items-center">
        <div class="relative px-4">
          <h3 class="font-semibold text-xl text-custom-color-2">Products</h3>
        </div>
      </div>
    </div>
    <div>
      <form class="flex items-center flex-wrap w-full p-4">
        <div class="w-full xl:w-6/12 my-2 px-2">
          <input type="text" class="h-10 border rounded px-4 py-2 w-full bg-gray-50" placeholder="Name">
        </div>
        <div class="w-full xl:w-6/12 my-2 px-2">
          <input type="number" class="h-10 border rounded px-4 py-2 w-full bg-gray-50" placeholder="Price">
        </div>
        <div class="w-full my-2 px-2">
          <textarea class="h-20 border rounded px-4 py-2 w-full bg-gray-50" style="resize: none;" placeholder="Description"></textarea>
        </div>
        <div class="w-full 2xl:w-4/12 my-2 px-2 flex items-center">
          <label>Sex :</label>
          <ul class="flex items-center">
            <li class="flex items-center"><button class="w-4 h-4 mx-2 border rounded-full"></button> <span>Men</span></li>
            <li class="flex items-center"><button class="w-4 h-4 mx-2 border rounded-full"></button> <span>Women</span></li>
          </ul>
        </div>
        <div class="w-full 2xl:w-4/12 px-2 my-2 flex items-center">
          <label class="mr-4">Categories :</label>
          <select class="h-10 border mt-1 rounded px-4 py-2 flex-grow bg-gray-50">
            <option value="test">test</option>
          </select>
        </div>
        <div class="w-full 2xl:w-4/12 px-2 my-2 flex items-center">
          <label class="mr-4">Brands :</label>
          <select class="h-10 border mt-1 rounded px-4 py-2 flex-grow bg-gray-50">
            <option value="test">test</option>
          </select>
        </div>
      </form>
      <div class="border-t p-4">
        <h2 class="font-semibold text-lg px-2 text-custom-color-9">Items :</h2>
        <form class="p-4 flex">
          <div class="w-60 mr-4">
            <div class="w-full h-60 border rounded overflow-hidden text-5xl text-custom-color-9 flex justify-center items-center">
              <i class="far fa-image"></i>
              <!-- <img src="https://via.placeholder.com/360x360.png/00eebb?text=animals+sit" alt="" class="w-full h-full object-cover"> -->
            </div>
            <button class="btn btn-white bg-gray-100 text-custom-color-9 w-full justify-center mt-4 rounded">upload</button>
          </div>
          <div class="w-6/12 flex-grow">
            <div class="flex items-center mb-4">
              <label class="w-24">Color :</label>
              <ul class="flex items-center">
                <li class="flex items-center rounded border mx-2">
                  <div class="w-10 h-10 flex items-center justify-center">
                    <span class="block w-6 h-6 mx-1 cursor-pointer rounded-full bg-red-500"></span>
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center bg-gray-200">
                    <button>
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </li>
                <li class="flex items-center rounded border mx-2">
                  <div class="w-10 h-10 flex items-center justify-center">
                    <span class="block w-6 h-6 mx-1 cursor-pointer rounded-full bg-red-500"></span>
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center bg-gray-200">
                    <button>
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </li>
                <li class="flex items-center rounded border mx-2">
                  <div class="w-10 h-10 flex items-center justify-center">
                    <span class="block w-6 h-6 mx-1 cursor-pointer rounded-full bg-red-500"></span>
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center bg-gray-200">
                    <button>
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </li>
                <li class="flex items-center rounded border mx-2">
                  <div class="w-10 h-10 flex items-center justify-center">
                    <span class="block w-6 h-6 mx-1 cursor-pointer rounded-full bg-red-500"></span>
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center bg-gray-200">
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
                  <div class="w-10 h-10 flex items-center justify-center bg-gray-200">
                    <button>
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </li>
                <li class="flex items-center rounded border mx-2">
                  <div class="w-10 h-10 flex items-center justify-center">
                    <span class="block w-6 h-6 cursor-pointer text-center">S</span>
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center bg-gray-200">
                    <button>
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </li>
                <li class="flex items-center rounded border mx-2">
                  <div class="w-10 h-10 flex items-center justify-center">
                    <span class="block w-6 h-6 cursor-pointer text-center">S</span>
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center bg-gray-200">
                    <button>
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </li>
                <li class="flex items-center rounded border mx-2">
                  <div class="w-10 h-10 flex items-center justify-center">
                    <span class="block w-6 h-6 cursor-pointer text-center">S</span>
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center bg-gray-200">
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
              <input type="number" min="0" class="h-10 border rounded px-4 py-2 mx-2 bg-gray-50">
            </div>
          </div>
        </form>
      </div>
      <div class="mx-auto border-t p-4 max-w-7xl">
        <table class="items-center w-full border">
        <thead>
          <tr>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-center">Image</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-center">Color</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-center">Size</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-center">Quantity</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-center"></th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <div class="w-20 h-20 border p-1 flex items-center justify-center mx-auto">
                <!-- <i class="far fa-image"></i> -->
                <img src="https://via.placeholder.com/360x360.png/00eebb?text=animals+sit" alt="" class="w-full h-full object-cover">
              </div>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <div class="w-14 h-14 rounded-full border p-1 mx-auto">
                <span class="block w-full h-full rounded-full bg-red-500"></span>
              </div>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">S</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">12</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <button class="rounded-full text-custom-color-3 border w-8 h-8">
                <i class="fas fa-pen"></i>
              </button>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <button class="rounded-full text-white bg-red-400 w-8 h-8">
                <i class="far fa-times-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <div class="w-20 h-20 border p-1 flex items-center justify-center mx-auto">
                <!-- <i class="far fa-image"></i> -->
                <img src="https://via.placeholder.com/360x360.png/00eebb?text=animals+sit" alt="" class="w-full h-full object-cover">
              </div>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <div class="w-14 h-14 rounded-full border p-1 mx-auto">
                <span class="block w-full h-full rounded-full bg-green-500"></span>
              </div>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">S</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">12</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <button class="rounded-full text-custom-color-3 border w-8 h-8">
                <i class="fas fa-pen"></i>
              </button>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <button class="rounded-full text-white bg-red-400 w-8 h-8">
                <i class="far fa-times-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <div class="w-20 h-20 border p-1 flex items-center justify-center mx-auto">
                <i class="far fa-image"></i>
              </div>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <div class="w-14 h-14 rounded-full border p-1 mx-auto">
                <span class="block w-full h-full rounded-full bg-yellow-500"></span>
              </div>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">S</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">12</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <button class="rounded-full text-custom-color-3 border w-8 h-8">
                <i class="fas fa-pen"></i>
              </button>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center text-custom-color-2">
              <button class="rounded-full text-white bg-red-400 w-8 h-8">
                <i class="far fa-times-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>