import { Button } from "@/components/ui/Button";
import { DELIVERY_LINKS } from "@/data/site-config";

/** Botão fixo inferior, só no mobile — o CTA sempre ao alcance do polegar. */
export function MobileOrderButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-soft bg-bg p-3 md:hidden">
      <Button href={DELIVERY_LINKS.whatsapp} className="w-full">
        Pedir Agora
      </Button>
    </div>
  );
}
