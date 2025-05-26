"use client";
import { Text } from "react-native";

export const Heading = ({ content }: { content: string }) => {
  return (
    <Text className="text-9xl underline font-bold text-gray-800 dark:text-gray-200">
      {content}
    </Text>
  );
};
