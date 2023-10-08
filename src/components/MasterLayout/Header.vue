<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>
<template>
  <section class="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
    <div class="relative">
      <svg
        class="text-[20px] text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="Search...."
        class="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded pl-11 pr-4 focus:border-gray-400"
      />
    </div>
    <div class="flex items-center gap-2 mr-2">
      <Popover v-slot="{ open }" class="relative">
        <PopoverButton
          :class="open ? 'bg-gray-100 rounded' : 'text-opacity-90'"
          class="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none"
        >
          <svg
            class="text-[24px]"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </PopoverButton>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel class="absolute right-0 z-10 mt-2.5 w-80">
            <div class="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
              <strong class="text-gray-700 font-medium">Messages</strong>
              <div class="mt-2 py-1 text-sm">
                <p>This is a message panel</p>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      <Popover v-slot="{ open }" class="relative">
        <PopoverButton
          :class="open ? 'bg-gray-100 rounded' : 'text-opacity-90'"
          class="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none"
        >
          <svg
            class="text-[24px]"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </PopoverButton>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel class="absolute right-0 z-10 mt-2.5 w-80">
            <div class="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
              <strong class="text-gray-700 font-medium">Notication</strong>
              <div class="mt-2 py-1 text-sm">
                <p>This is a notication panel</p>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
  </section>
</template>
