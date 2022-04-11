import { defineConfig } from 'yapi-to-typescript'

export default defineConfig([
  {
    serverUrl: 'http://127.0.0.1:4000/',
    typesOnly: false,
    target: 'javascript',
    reactHooks: {
      enabled: false,
    },
    devEnvName: 'local',
    prodEnvName: 'docker',
    outputFilePath: (interfaceInfo) =>
      `src/api/${interfaceInfo._category.name}.js`,
    requestFunctionFilePath: 'src/api/request.js',
    dataKey: 'data',
    projects: [
      {
        token:
          '31c3ad5f9aec044b011ee2c5b5691326fbc9d80a6ef404bc25404813b1e4bca4',
        categories: [
          {
            id: 0,
            getRequestFunctionName (interfaceInfo) {
              console.log(interfaceInfo.path)
              const apiPaths = interfaceInfo.path.split('/')
              let name = [interfaceInfo.method.toLowerCase()]
              name = [].concat(name, apiPaths)
              name = name.map((p) => {
                return p.replace(/[^a-zA-Z0-9_]+/g, '')
              })
              return name.join('_')
              // return changeCase.camelCase(
              //     interfaceInfo.method + interfaceInfo.path.replaceAll("/", '_').replaceAll('{', '').replaceAll('}', '')
              // )
            },
          },
        ],
      },
    ],
  },
])
