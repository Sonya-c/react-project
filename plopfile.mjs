
export default function (plop) {
    plop.setGenerator("Component", {
        description: 'Generate a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{properCase name}}/{{properCase name}}.tsx',
                templateFile: 'generators/component/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
                templateFile: 'generators/component/component.stories.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{properCase name}}/index.ts',
                templateFile: 'generators/component/index.ts.hbs',
            },
    ]
    })
}