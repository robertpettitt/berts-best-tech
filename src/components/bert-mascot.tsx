type BertMascotProps = {
  className?: string;
};

export default function BertMascot({ className }: BertMascotProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 430 470"
      role="img"
      aria-labelledby="bert-title bert-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="bert-title">Bert, the friendly face of Bert&apos;s Best Tech</title>
      <desc id="bert-description">
        A smiling cartoon guy with tousled blond hair and a red flannel shirt.
      </desc>
      <defs>
        <pattern id="flannel" width="36" height="36" patternUnits="userSpaceOnUse">
          <rect width="36" height="36" fill="#a94535" />
          <path d="M0 8h36M0 26h36" stroke="#7d3029" strokeWidth="5" opacity=".8" />
          <path d="M9 0v36M27 0v36" stroke="#e5b7a0" strokeWidth="3" opacity=".7" />
          <path d="M0 17h36M18 0v36" stroke="#f1d8c6" strokeWidth="1.5" opacity=".8" />
        </pattern>
        <clipPath id="shirt-clip">
          <path d="M74 452c5-67 29-112 82-130l35-22h53l35 22c52 18 77 63 82 130H74Z" />
        </clipPath>
      </defs>

      <ellipse cx="215" cy="447" rx="151" ry="15" fill="#4a3328" opacity=".12" />
      <path d="M164 282h102v78c-22 26-81 28-102 0v-78Z" fill="#d58c64" />
      <path
        d="M74 452c5-67 29-112 82-130l35-22h53l35 22c52 18 77 63 82 130H74Z"
        fill="url(#flannel)"
      />
      <g clipPath="url(#shirt-clip)" opacity=".8">
        <path d="m190 300 25 43 26-43" fill="#f3e7d4" />
        <path d="m216 343 1 109" stroke="#f4d0b9" strokeWidth="4" />
        <path d="m186 322 27 21-33 42-16-29 22-34Zm59 0-28 21 34 42 17-29-23-34Z" fill="#8f382f" />
        <path d="m128 348-16 104m185-107 17 107" stroke="#f5d6be" strokeWidth="3" opacity=".7" />
      </g>
      <path d="M190 300 215 344l26-44" fill="none" stroke="#f8e8d8" strokeWidth="5" />

      <path d="M123 160c0-71 37-118 93-118s92 47 92 118v55c0 65-42 111-92 111s-93-46-93-111v-55Z" fill="#d98f67" />
      <path d="M126 194c-23-19-28 13-13 34 6 9 13 13 18 12m166-46c23-19 28 13 13 34-6 9-13 13-18 12" fill="#d98f67" />
      <path d="M126 207c-13-17-20 1-9 16 4 5 8 8 12 8m165-24c13-17 20 1 9 16-4 5-8 8-12 8" fill="#c97856" />

      <path
        d="M123 170c-13-62 6-111 46-130 21-29 73-25 94-7 40 3 65 43 55 95l-7 42-15-17-7-35c-31 6-63-4-85-23-14 23-39 37-70 43l-1 35-10 15Z"
        fill="#d7a64e"
      />
      <path d="M137 119c4-26 20-47 41-58m-28 54c20-11 34-26 43-46m71 11c17 10 29 24 35 45m-59-56c20 4 36 13 49 29" fill="none" stroke="#edc76e" strokeWidth="12" strokeLinecap="round" />
      <path d="M153 174c14-9 30-10 44-2m37 0c14-8 29-7 43 2" fill="none" stroke="#654537" strokeWidth="6" strokeLinecap="round" />
      <path d="M157 191c0-9 6-15 14-15s14 6 14 15-6 15-14 15-14-6-14-15Zm69 0c0-9 6-15 14-15s14 6 14 15-6 15-14 15-14-6-14-15Z" fill="#fff5e8" />
      <circle cx="171" cy="192" r="6" fill="#44352c" />
      <circle cx="240" cy="192" r="6" fill="#44352c" />
      <circle cx="173" cy="190" r="2" fill="#fff" />
      <circle cx="242" cy="190" r="2" fill="#fff" />
      <path d="M207 197c-3 15-8 28-5 32 3 4 10 4 15 1" fill="none" stroke="#ba6c50" strokeWidth="4" strokeLinecap="round" />
      <path d="M174 253c19 25 59 29 83 0" fill="#fff1df" stroke="#7b403b" strokeWidth="5" strokeLinecap="round" />
      <path d="M187 257c16 8 40 9 56 0" fill="none" stroke="#d97d72" strokeWidth="5" strokeLinecap="round" />
      <path d="M145 226c7 5 14 7 22 6m91 0c8 1 15-1 22-6" fill="none" stroke="#c97856" strokeWidth="3" strokeLinecap="round" opacity=".55" />
    </svg>
  );
}
