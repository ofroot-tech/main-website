// This file used to export the AutoRemindersForm component which expects props (onClose).
// That caused Next to treat this as an app route `page.js` with an invalid default export type.
// The real component has been moved to `index.js` in the same folder. Keep this file as a
// route-compatible default export with no props so builds and type checks succeed.
export default function Page() {
  return null;
}