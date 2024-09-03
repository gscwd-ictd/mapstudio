"use client";

import { IfFeatureEnabled } from "@growthbook/growthbook-react";

export const Test = () => {
  return <IfFeatureEnabled feature="my_feature">test</IfFeatureEnabled>;
};
