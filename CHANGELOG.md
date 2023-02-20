# @total-typescript/ts-reset

## 0.3.7

### Patch Changes

- Added license and switched to MIT

## 0.3.6

### Patch Changes

- d3ddefa: Changed the exports map so "types" appears top

## 0.3.5

### Patch Changes

- Another fix for deploy process.

## 0.3.4

### Patch Changes

- Fixed an issue where dist folder was not deployed.

## 0.3.3

### Patch Changes

- Fixed a bug where 0n was not being filtered out by filter-boolean

## 0.3.2

### Patch Changes

- Removed the ability to use Set.has as a type predicate. This ensures that Set.has never sets the checked element to never.

## 0.3.1

### Patch Changes

- Fixed a bug where Array.includes was returning a predicate, which gave false positives.

## 0.3.0

### Minor Changes

- ed9edc1: Added improved typings for Set.has

### Patch Changes

- d27e819: Fixed issue where webpack wasn't recognizing the exports map

## 0.2.1

### Patch Changes

- Readme tweak

## 0.2.0

### Minor Changes

- e5a33c9: Added support for array.includes

### Patch Changes

- 8fe8e29: Improved filter-boolean to handle falsy values, not just NonNullable values

## 0.1.4

### Patch Changes

- Fixed exports (finally)

## 0.1.3

### Patch Changes

- bb3f2d1: Attempted fix for exports maps

## 0.1.2

### Patch Changes

- 4cfb07e: Fixed build process and moved to .d.ts files

## 0.1.1

### Patch Changes

- 0360275: Fixed type imports
- e62b05a: Added .npmignore

## 0.1.0

### Minor Changes

- 51628fc: Initial commit
