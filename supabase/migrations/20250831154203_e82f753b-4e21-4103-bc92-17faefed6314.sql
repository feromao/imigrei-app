-- First, let's see what data exists and handle the null owner_user_id values
-- We'll create a dummy system user for existing businesses without owners
DO $$
BEGIN
  -- Update existing records with null owner_user_id to a placeholder
  -- In a real scenario, you'd want to assign these to actual users or delete them
  UPDATE public.negocios 
  SET owner_user_id = '00000000-0000-0000-0000-000000000000'::uuid
  WHERE owner_user_id IS NULL;
END $$;

-- Now make owner_user_id NOT NULL to enforce business ownership
ALTER TABLE public.negocios ALTER COLUMN owner_user_id SET NOT NULL;

-- Add a check to ensure authenticated users can only create businesses for themselves
CREATE OR REPLACE FUNCTION public.validate_business_owner()
RETURNS TRIGGER AS $$
BEGIN
  -- Ensure the owner_user_id matches the authenticated user
  IF NEW.owner_user_id != auth.uid() THEN
    RAISE EXCEPTION 'Users can only create businesses for themselves';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for INSERT operations
CREATE TRIGGER validate_business_owner_on_insert
  BEFORE INSERT ON public.negocios
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_business_owner();

-- Create trigger for UPDATE operations (prevent ownership transfer)
CREATE TRIGGER validate_business_owner_on_update
  BEFORE UPDATE ON public.negocios
  FOR EACH ROW
  WHEN (OLD.owner_user_id IS DISTINCT FROM NEW.owner_user_id)
  EXECUTE FUNCTION public.validate_business_owner();