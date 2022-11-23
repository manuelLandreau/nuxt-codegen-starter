import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	watch: true,
	schema: [
		{
			[process.env.GRAPHQL_API_URL as string]: {
				headers: {
					Authorization: process.env.GRAPHQL_API_TOKEN as string
				}
			}
		}
	],
	documents: ['**/*.gql'],
	generates: {
		'graphql/types.ts': {
			plugins: ['typescript'],
			config: {
				namingConvention: {
					enumValues: 'change-case-all#upperCaseFirst'
				}
			}
		},
		'graphql/introspection-result.ts': {
			plugins: ['fragment-matcher']
		},
		'components/': {
			preset: 'near-operation-file',
			presetConfig: {
				baseTypesPath: 'graphql/types.ts'
			},
			plugins: ['typescript-operations', 'typescript-vue-urql'],
			config: {
				namingConvention: {
					enumValues: 'change-case-all#upperCaseFirst'
				},
				withCompositionFunctions: false,
				strictScalars: true,
				scalars: {
					BooleanType: 'boolean',
					CustomData: 'Record<string, string>',
					Date: 'string',
					DateTime: 'string',
					FloatType: 'number',
					IntType: 'number',
					ItemId: 'string',
					JsonField: 'unknown',
					MetaTagAttributes: 'Record<string, string>',
					UploadId: 'string'
				}
			}
		}
	}
};

export default config;
