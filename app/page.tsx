import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure the highest quality standards. Not happy? We offer 30-day refund guarantee",
  },
  {
    name: "For the planet",
    icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment",
  },
];

export default function Home() {
  return (
    <div>
      TEST
      <MaxWidthWrapper>
        <section className="py-20 mx-auto max-w-3xl text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6 text-gray-900 sm:text-6xl">
            Your marketplace for high quality
            <span className="text-blue-600">&nbsp;digital assets</span>.
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground mb-6">
            Welcome to *****. Every asset on our platform is verified by our
            team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/products"
              className={buttonVariants({ variant: "default" })}
            >
              Browse trending
            </Link>
            <Button variant="outline">Our quality promise &rarr;</Button>
          </div>
        </section>

        {/* TODO: LIST OF PRODUCTS */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <ul className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => {
              return (
                <li
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="flex justify-center md:flex-shrink-0">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
