# Changelog

All notable changes to this project will be documented in this file. See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit guidelines.

## [v1.0.8](https://github.com/whisklabs/grpc-ts/compare/v1.0.7...v1.0.8) (2021-4-7)

### Refactoring

- add meta in http ([8337749](https://github.com/whisklabs/grpc-ts/commit/8337749594590d0e454af134a019d21f406e9dca))

## [v1.0.7](https://github.com/whisklabs/grpc-ts/compare/v1.0.6...v1.0.7) (2021-3-25)

### Bug Fixes

- issues #5 ([8124b1f](https://github.com/whisklabs/grpc-ts/commit/8124b1f334506efbecb3de06e08758c1d3d68c52))

  Allow negative numbers in int32 and int64

### Refactoring

- add xhr in transformResponse ([105fdc1](https://github.com/whisklabs/grpc-ts/commit/105fdc1bdcdba10765cd0a2a5838cfe626c48017))

## [v1.0.6](https://github.com/whisklabs/grpc-ts/compare/v1.0.5...v1.0.6) (2021-3-22)

### Documentation

- add linguist ([a154cf0](https://github.com/whisklabs/grpc-ts/commit/a154cf0b66a94bf3bb57a1e21ad4d50616d115d8))

### Bug Fixes

- remove const enum ([4330100](https://github.com/whisklabs/grpc-ts/commit/433010043fad2a53e140d876affbb5ca55d7cd51))
- nested messages ([1207457](https://github.com/whisklabs/grpc-ts/commit/1207457381c1f4dfbe06756ad1d808998aae7f26))

  Example
  
  ```proto
  message ListItemOp {
    message Create {
      string name = 1;
    }
  }
  
  message Item {
    repeated ListItemOp.Create items = 1;
  }
  ```

- recursive find nested deps ([a04d052](https://github.com/whisklabs/grpc-ts/commit/a04d052d8142b023e0dcdf32b2b07feacf969259))

  Example:
  
  ```proto
  message A {
    message B {}
  }
  message B {
    message A {
      message C {}
    }
    A.B item = 1;
    A.C local = 2;
  }
  ```

### Tests

- add test fail generation ([5b247eb](https://github.com/whisklabs/grpc-ts/commit/5b247eb4933586d36d3295fe6c36f470da19ce5d))

## [v1.0.5](https://github.com/whisklabs/grpc-ts/compare/v1.0.4...v1.0.5) (2021-1-19)

### Bug Fixes

- return generator in package ([fcf2841](https://github.com/whisklabs/grpc-ts/commit/fcf2841181d5ab5c07bd6d56ea7fcab055bb6fe6))

### Refactoring

- flatten destruction data from request ([a1b75a6](https://github.com/whisklabs/grpc-ts/commit/a1b75a6ed263c920db384c1ce5ea889d55bebdaf))
- allow import internal types ([7837186](https://github.com/whisklabs/grpc-ts/commit/78371868769c7e3cc3f97227eb449222ec3fbc10))

## [v1.0.4](https://github.com/whisklabs/grpc-ts/compare/v1.0.3...v1.0.4) (2020-12-28)

### Build system or external dependencies

- Update deps ([89a43ee](https://github.com/whisklabs/grpc-ts/commit/89a43ee501579064ae0a02acd0c099cd7223a093))

### Bug Fixes

- encode empty message ([3a7f196](https://github.com/whisklabs/grpc-ts/commit/3a7f196d812ea1fcce3d44655605ebb3e33b1799))
- oneof name convert to camelCase ([c413e12](https://github.com/whisklabs/grpc-ts/commit/c413e12c23590ec78ef2fc467ec8569cf98990c9))
- typings unwrap ([aa95cf2](https://github.com/whisklabs/grpc-ts/commit/aa95cf29f2efc11f38d75a20506078ac254696ae))
- improve typings ([d0b8f35](https://github.com/whisklabs/grpc-ts/commit/d0b8f35acb43edc1fa110b667a444925da7ee098))
- oneof typings ([c147012](https://github.com/whisklabs/grpc-ts/commit/c1470125348f631f339efa9c73edc8335ac8457e))

### Refactoring

- improve path of read error ([6ff5e20](https://github.com/whisklabs/grpc-ts/commit/6ff5e20f27a3358c6fe91a28be40e8d1cd6c67c4))

## [v1.0.3](https://github.com/whisklabs/grpc-ts/compare/v1.0.2...v1.0.3) (2020-11-17)

### Continuous Integration

- github actions update ([d781c29](https://github.com/whisklabs/grpc-ts/commit/d781c29e056f5ad968be667c302126eaf8567703))

### Bug Fixes

- correct send of zero values ([453980f](https://github.com/whisklabs/grpc-ts/commit/453980f432f618c632ad4b37437372efc1684ac5))

## [v1.0.2](https://github.com/whisklabs/grpc-ts/compare/v1.0.1...v1.0.2) (2020-9-16)

### Build system or external dependencies

- update dependencies ([24a5700](https://github.com/whisklabs/grpc-ts/commit/24a57002b979afe269170a258271f1267dcb83e5))

### Bug Fixes

- enum d.ts generator ([d1d9e89](https://github.com/whisklabs/grpc-ts/commit/d1d9e897acd8782071aca46ac57d0cca565ddb2d))

## [v1.0.1](https://github.com/whisklabs/grpc-ts/compare/v1.0.0...v1.0.1) (2020-9-15)

### Documentation

- add keywords ([1aea638](https://github.com/whisklabs/grpc-ts/commit/1aea638dd86550e073d644f1ff7a1022e345dd5e))

## [v1.0.0](https://github.com/whisklabs/grpc-ts/compare/d3fd637a27da93a16095b7256a1b136124892b70...v1.0.0) (2020-9-15)

### Features

- init grpc ([38c7921](https://github.com/whisklabs/grpc-ts/commit/38c792182e15c46d0cc908f30d15d5ca756dda5b))
