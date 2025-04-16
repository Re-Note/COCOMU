import MonacoEditor from '@monaco-editor/react';
import S from './style';

interface CodeEditorProps {
  language: string;
  code: string;
  onChange: (newText: string) => void;
  finish?: boolean;
}

export default function CodeEditor({ language, code, onChange, finish }: CodeEditorProps) {
  return (
    <S.Container>
      <MonacoEditor
        defaultLanguage={language}
        theme='vs'
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          readOnly: finish ?? false,
          domReadOnly: finish ?? false,
        }}
        value={code}
        onChange={onChange}
      />
    </S.Container>
  );
}
